# DEITY Game Documentation

This folder contains all design documentation for the DEITY god-simulation game.

## Core Vision
- **[visiondialogue.md](../visiondialogue.md)** - Original game design dialogue covering core loop, mechanics, and philosophy

---

## Genesis Stage (Species Creation)

Documentation for the species creation system at game start.

| Document | Description |
|----------|-------------|
| [CREATION_STAGE_DESIGN.md](genesis/CREATION_STAGE_DESIGN.md) | Core design document for the Genesis stage - trait system, size categories, longevity, diet, favored terrain, UI layout |
| [BALANCE_CONSIDERATIONS.md](genesis/BALANCE_CONSIDERATIONS.md) | Analysis of balance issues - swarm vs giants, equipment scaling, pop cap fixes |
| [EXPANDED_TRAIT_ENCYCLOPEDIA.md](genesis/EXPANDED_TRAIT_ENCYCLOPEDIA.md) | Comprehensive trait reference (300+ traits) compiled from biological research across mammals, reptiles, insects, birds, marine life, plants, fungi |

---

## Data Files

| File | Description |
|------|-------------|
| [data/traits.json](../data/traits.json) | Machine-readable trait definitions for implementation |

---

## Source Code

| File | Description |
|------|-------------|
| [src/types/species.ts](../src/types/species.ts) | TypeScript type definitions for species creation |
| [src/creation/speciesBuilder.ts](../src/creation/speciesBuilder.ts) | Utility functions for stat derivation and validation |

---

## Quick Reference

### Species Creation Flow
1. Player selects **Size** (Diminutive → Behemoth)
2. Player selects **Longevity** (Mayfly → Ancient Ones)
3. Player selects **Diet** (Omnivore, Predator, Herbivore)
4. Player selects **Favored Terrain**
5. Player picks **Traits** from categories (Physical, Temperament, Mental, Survival)
6. System derives **Hidden Stats** (harmony, aggression, curiosity, piety, naturalism, logos, sociology)

### Key Design Principles
- **Traits drive stats**: Players pick flavorful traits, system calculates hidden mechanical values
- **Size matters**: Larger = fewer sprites, more HP/damage, different equipment scaling
- **Balance via scaling**: Equipment and notables must scale multiplicatively (up to 10x) to let giants compete with swarms
