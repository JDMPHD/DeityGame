# DEITY: Performance Optimization & Code Review Directive

## Executive Summary
**Target Issue:** High GPU usage and Overheating on MacBook Air.
**Root Cause:** Likely uncapped rendering loop, inefficient draw calls for high-entity counts ("Pixel Petri Dish"), and lack of spatial partitioning in the simulation loop.

Since the runtime engine code is not currently in the repository (only Genesis data logic is present), this document serves as a **Fix Directive** for Claude Code to implement on the runtime codebase.

---

## 1. GPU Optimization (The "Overheating" Fix)

The MacBook Air overheating suggests the GPU is running at max load (likely 100% usage). This usually happens when the game tries to render as many frames as possible or draws inefficiently.

### A. Cap the Frame Rate
**Problem:** `requestAnimationFrame` usually syncs to the display refresh rate. On modern MacBooks (ProMotion), this can be **120Hz**. Rendering 120fps for a "simulation" is unnecessary and burns battery.
**Fix:** Implement a delta-time limiter to cap rendering to 30 or 60 FPS.

```typescript
// BAD:
function animate() {
  render();
  requestAnimationFrame(animate);
}

// GOOD:
const FPS = 30;
const interval = 1000 / FPS;
let lastTime = 0;

function animate(currentTime) {
  requestAnimationFrame(animate);
  const delta = currentTime - lastTime;

  if (delta > interval) {
    lastTime = currentTime - (delta % interval);
    render();
  }
}
```

### B. Optimize "Pixel Petri Dish" Rendering
**Problem:** If you are rendering thousands of sprites using:
1.  **DOM Elements (`<div>`):** extremely slow, high memory.
2.  **Canvas 2D `fillRect`:** slow for thousands of calls.
3.  **WebGL Naive:** heavy if not batched.

**Fix (Canvas 2D):**
Use `ImageData` manipulation for a "pixel" style game. Instead of drawing 5000 rects, manipulate the pixel buffer directly.

```typescript
// BAD:
sprites.forEach(s => ctx.fillRect(s.x, s.y, 1, 1));

// GOOD:
const imgData = ctx.createImageData(width, height);
const data = imgData.data;
sprites.forEach(s => {
  const index = (s.y * width + s.x) * 4;
  data[index] = 255;     // R
  data[index + 1] = 255; // G
  data[index + 2] = 255; // B
  data[index + 3] = 255; // Alpha
});
ctx.putImageData(imgData, 0, 0);
```

**Fix (WebGL/PixiJS):**
Ensure you are using **ParticleContainer** (PixiJS) or **InstancedMesh** (Three.js/Raw WebGL). Do *not* create a separate Sprite object for every pixel if you have thousands.

### C. Retina/High-DPI Handling
**Problem:** MacBooks have Retina screens (devicePixelRatio = 2.0 or 3.0). Rendering a full-screen canvas at native resolution (e.g., 2880x1800) is 4x the pixels of 1080p.
**Fix:** For a "pixel art" game, render at a low logical resolution (e.g., 640x360) and scale up using CSS `image-rendering: pixelated`.

```typescript
// In setup:
canvas.width = 640;  // Logical low-res
canvas.height = 360;
// CSS:
canvas.style.width = '100%';
canvas.style.imageRendering = 'pixelated';
```

---

## 2. CPU/Simulation Optimization (The "Lag" Fix)

### A. Decouple Simulation from Rendering
**Problem:** Running simulation logic (AI, movement, hunger) 60/120 times a second is wasteful.
**Fix:** Run simulation at a fixed tick rate (e.g., 10 or 20 ticks per second), separate from the render loop.

```typescript
// Simulation Tick
setInterval(() => {
  updateWorldState();
}, 100); // 10 times per second
```

### B. Spatial Partitioning for Interactions
**Problem:** "First Contact" or collision checks. If you check every sprite against every other sprite (`O(N^2)`), 1000 sprites = 1,000,000 checks per tick.
**Fix:** Use a **Spatial Hash Grid** or **QuadTree**. Only check interactions with neighbors in the same grid cell.

```typescript
// BAD:
for (const a of sprites) {
  for (const b of sprites) {
    if (distance(a, b) < range) { ... }
  }
}

// GOOD:
const grid = new Map();
sprites.forEach(s => {
  const cell = `${Math.floor(s.x / 10)},${Math.floor(s.y / 10)}`;
  if (!grid.has(cell)) grid.set(cell, []);
  grid.get(cell).push(s);
});
// Only check within cells
```

---

## 3. Data Structure Review (Codebase Specific)

Based on the `src/creation` code, ensure the following in the Runtime Engine:

1.  **Cache Derived Stats:**
    The `SpeciesDefinition` contains `derivedStats` and `modifiers`. Ensure these are NOT recalculated every frame. They should be calculated once at spawn and stored on the Entity instance.

2.  **Trait Lookups:**
    `traits` are stored as a string array (`string[]`).
    **Optimization:** In the hot path (game loop), do not look up traits by string ID (e.g., `traits.find(t => t.id === "predator")`). Instead, cache flags on the entity:
    ```typescript
    // At Spawn:
    entity.isPredator = species.diet === 'predator';
    entity.regenRate = species.modifiers.hpRegenRate;
    ```
    The loop should check `if (entity.isPredator)` (boolean check), not string comparisons.

3.  **Object Pooling:**
    For a game with high spawn rates (Swarm types: 5.0x multiplier), do not `new Sprite()` and let GC collect them constantly. Re-use dead sprite objects.

---

## 4. Immediate Action Plan for Claude

1.  **Locate the Main Loop:** Find `requestAnimationFrame` or the main `update()` function.
2.  **Apply FPS Cap:** Implement the delta-time check. **(High Impact)**.
3.  **Check Canvas Resolution:** Log `canvas.width` vs `window.innerWidth`. If they match on a retina screen, fix the resolution scaling. **(High Impact)**.
4.  **Profile "PutImageData":** If using Canvas 2D, switch to `ImageData` batching if not already doing so.
