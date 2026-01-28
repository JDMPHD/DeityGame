# DEITY: Species Creation Stage (Genesis) Design Document

## Overview

The Genesis stage is where players design their species' **immutable biological hardware** - traits that persist forever and determine the behavioral algorithms of their civilization. This is a one-time choice that locks upon "DEPLOY".

### Design Philosophy

**Trait-Based Selection → Hidden Stats**

Rather than selecting raw stats like "Aggression: 7", players choose flavorful **traits** from an extensive list. These traits feed into **hidden mechanical stats** that the game engine uses. This creates:

- More immersive, narrative-driven species creation
- Emergent combinations players can discover
- Cleaner UI (pick traits, not tune sliders)
- Deeper strategic depth through trait synergies

---

## Core Systems

### 1. Creation Points

Players receive a pool of **Creation Points** to spend on:
- Size category
- Longevity tier
- Traits (variable costs)
- Favored terrain (may be free or cost-modified by desirability)

Some traits may be **free** if they're well-balanced trade-offs (e.g., Aggression levels).

---

## Size Categories

Size heavily impacts individual sprite stats, spawn rate, and population cap/biomass.

| Category | Reference | HP Modifier | Damage Modifier | Spawn Rate | Pop Cap | Notes |
|----------|-----------|-------------|-----------------|------------|---------|-------|
| **Diminutive** | House cat | 0.3x | 0.3x | 5.0x | 5.0x | Swarm tactics, expendable |
| **Small** | Dog | 0.5x | 0.5x | 3.0x | 3.0x | Quick, numerous |
| **Middling** | Ape | 1.0x | 1.0x | 1.0x | 1.0x | Baseline (human-scale) |
| **Huge** | Bear | 2.0x | 2.0x | 0.4x | 0.4x | Powerful individuals |
| **Behemoth** | Elephant | 4.0x | 3.0x | 0.15x | 0.15x | Legendary titans |

### Balance Consideration: Swarm vs Giants

**The Problem:** Tiny creatures can expand rapidly; physical buffs of giants may not compensate.

**The Solution:** Equipment and Notable scaling must matter enormously.

- A fully-equipped sprite with farming/hunting tools + legendary hunter-gatherer should claim territory at **10x rate** of a naked swarm sprite
- Equipment bonuses scale with longevity (you keep gear longer)
- Skill farming creates multiplicative advantages over time
- At endgame: A swarm covering 80% of the map may struggle against corner-ramped giant elders

**Implementation Notes:**
- Equipment effectiveness multipliers need significant scaling
- Notable skill bonuses must apply to non-combat activities (gathering, claiming, crafting)
- Long-lived species "compound interest" their advantages

---

## Longevity

Slider from **"Out Brief Candle"** to **"Ancient Ones"**

| Tier | Name | Life Phase Rate | Ticks to Legendary | Notes |
|------|------|-----------------|-------------------|-------|
| 1 | Mayfly | 50 ticks/phase | Never achievable | Pure swarm play |
| 2 | Brief Candle | 100 ticks/phase | ~800 ticks | Rare elders |
| 3 | Mortal Span | 200 ticks/phase | ~600 ticks | Balanced |
| 4 | Long-Lived | 400 ticks/phase | ~500 ticks | Elder-heavy society |
| 5 | Ancient Ones | 1000 ticks/phase | ~400 ticks | Society of masters |

### Life Phases
1. **Novice** (negative traits: Naive, Reckless, Hesitant)
2. **Blooded** (youth traits removed, basic competence)
3. **Veteran** (class perks unlock)
4. **Elder** (mastery abilities available)
5. **Legendary** (peak power, near death)

### Experience Gain Rate
- Novice → Legendary requires approximately **400-800 ticks** depending on activity level
- Short-lived species physically cannot accumulate enough XP before death
- Long-lived species have time to compound advantages

---

## Core Hidden Stats

These are **derived from traits**, not directly selected.

### Harmony (Collectivity vs Individualism)

**Range:** -10 (Hyper-Individualist) to +10 (Hive Mind)

**Effects:**
| Harmony Level | Spawn Rate Mod | Pop Cap Mod | Repulsion | Intra-Aggression |
|---------------|----------------|-------------|-----------|------------------|
| -10 | 0.7x | 0.7x | Maximum | Very High |
| -5 | 0.85x | 0.85x | High | High |
| 0 | 1.0x | 1.0x | Moderate | Moderate |
| +5 | 1.1x | 1.1x | Low | Low |
| +10 | 1.2x | 1.2x | None | None |

**Behavioral Effects:**
- **Low Harmony:** Strong repulsion between sprites, prefer isolation, autonomous decision-making, intraspecies conflict possible
- **High Harmony:** Group cohesion, flocking behavior, shared resources, collective decision-making

**Current Design Note:** The current sprite behavior (strong group/teammate behaviors) represents **max harmony**. Lower harmony should progressively remove these behaviors.

### Aggression

**Range:** -10 (Pacifist) to +10 (Berserker)

**Effects:**
- Drives attack vs flee decision threshold
- Low: Avoids conflict, flees early
- Balanced: Attacks when confident of victory
- High: Actively seeks combat, may override self-preservation ("Leeroy Jenkins")

**Interaction with Harmony:**
- High Harmony + High Aggression = Coordinated war bands, power calculations include allies
- Low Harmony + High Aggression = Lone berserkers, autonomous violence, may attack own species

**Intraspecies Effects:**
- Affects band-vs-band conflict probability
- Affects usurpation violence (duel vs peaceful transition)
- Affects notable infighting within bands

### Curiosity (Base Intelligence)

**Range:** 1-10

**Effects:**
- Base learning rate
- Tech discovery speed
- Problem-solving in encounters

**Subcategories (can specialize with trait trade-offs):**

| Subcategory | Focus | Bonuses |
|-------------|-------|---------|
| **Naturalism** | Nature, biology, survival | Healing, food efficiency, beast taming, terrain adaptation |
| **Logos** | Math, physics, engineering | Construction, siege, logistics, projectile accuracy |
| **Sociology** | Politics, culture, psychology | Conversion resistance, stability, diplomacy, faith retention |

### Piety

**Range:** 1-10

**Effects:**
- Faith generation rate modifier
- Responsiveness to Voice of God broadcasts
- Prophet instruction effectiveness
- **Trade-off:** May apply penalty to Curiosity (faith vs reason tension)

---

## Diet Types

### Omnivore (Base Setting)
- Standard biomass from territory claiming
- Standard biomass from animal kills
- No special modifiers

### Predator
**Mechanics:**
- Still claims territory for biomass (cannot remove entirely)
- Gains biomass from animal kills (enhanced)
- **NEW: Hunting Mechanic**
  - Meat Store that ticks down based on population size
  - Replenished by animal kills
  - If Meat Store = 0: Starvation effects apply

**Bonuses:**
- Speed boost
- Damage boost
- Modified instincts (hunting-focused)
- Preference for ranging widely outside home territory
- Less motivation to stay home (still expands, but splits focus)

**Instinct Modifications:**
- Increased aggression toward prey animals
- Wider roaming radius
- Territory claiming split with ranging behaviors

### Herbivore
**Mechanics:**
- No biomass from animal kills
- Instincts modified away from hunting
- May still clear animal dens (non-meat rewards only)
- Can still be aggressive toward threats/enemies

**Bonuses:**
- Harmony boost (affects spawn rate, pop cap, aggression reduction)
- Possibly reduced aggression baseline

---

## Trait System

### Trait Categories

Traits are organized into categories. Some are mutually exclusive, some are orthogonal.

#### Physical Adaptations (Body Modifications)

| Trait | Cost | Effects | Notes |
|-------|------|---------|-------|
| **Thick Hide** | Low | +HP | Basic defense |
| **Armored Shell** | Medium | ++HP, -Speed | Tank build |
| **Razor Claws** | Low | +Damage, +Aggression | Natural weapons |
| **Deadly Fangs** | Low | +Damage, +Aggression | Natural weapons |
| **Powerful Tail** | Medium | +Damage, +Balance, +Swimming? | Broad utility |
| **Opposable Thumbs** | High | ++Crafting, +Intelligence (all) | Essential for tool users |
| **Tentacles** | Medium | +Crafting, +Intelligence | Lesser thumb alternative |
| **Natural Camouflage** | Medium | Enemies detect only when adjacent | Stealth build |
| **Pheromone Trails** | Low | +Species signaling, +Harmony | Communication |
| **Winged** | High | Eliminates traversal costs, -HP | Mobility extreme |
| **Burrowers** | Medium | +Claim rate, +Claim resistance | Territorial advantage |
| **Aquatic** | Medium | Water traversal, land penalties | Terrain specialization |
| **Venomous** | Medium | DoT on attacks, +Hunting success | Predator synergy |
| **Regeneration** | High | Slow HP recovery over time | Survivability |
| **Echolocation** | Low | +Detection range in dark/caves | Sensory |
| **Compound Eyes** | Low | +Vision range, +Threat detection | Sensory |

#### Temperament Traits (Feed into Hidden Stats)

| Trait | Cost | Hidden Stat Effects | Notes |
|-------|------|---------------------|-------|
| **Bloodthirsty** | Free? | Aggression +5 | Seeks combat |
| **Pacifist** | Free? | Aggression -5 | Avoids combat |
| **Balanced Aggression** | Free? | Aggression 0 | Default |
| **Hive-Minded** | Medium | Harmony +5, Curiosity -1 | Collective |
| **Fiercely Independent** | Free? | Harmony -5 | Loners |
| **Pack Bonded** | Low | Harmony +2 | Social but not hive |
| **Curious** | Low | Curiosity +2 | Learners |
| **Incurious** | Gives Points | Curiosity -2 | Instinct-driven |
| **Devout** | Low | Piety +3 | Faith-focused |
| **Skeptical** | Gives Points | Piety -3 | Reason-focused |
| **Impulsive** | Free? | +Speed, -Planning | Quick but rash |
| **Methodical** | Free? | -Speed, +Planning | Slow but thorough |

#### Intelligence Specializations

| Trait | Cost | Effects | Notes |
|-------|------|---------|-------|
| **Naturalistic** | Low | Naturalism +3, Logos -1 | Nature intelligence |
| **Calculative** | Low | Logos +3, Naturalism -1 | Engineering intelligence |
| **Intuitive** | Low | Sociology +2, Logos -1 | Social intelligence |
| **Analytical** | Low | Logos +2, Sociology -1 | Pure logic |
| **Empathic** | Low | Sociology +3, Curiosity requirement | Reading others |

#### Survival Traits

| Trait | Cost | Effects | Notes |
|-------|------|---------|-------|
| **Hardy** | Low | +Disease resistance, +Starvation resistance | Survivability |
| **Frail** | Gives Points | -HP, -Disease resistance | Glass cannon |
| **Fertile** | Medium | +Spawn rate | Population boom |
| **Slow Breeding** | Gives Points | -Spawn rate | Quality over quantity |
| **Migratory** | Low | +Movement speed, -Territory attachment | Nomadic tendency |
| **Territorial** | Low | +Claim rate, +Defense at home, -Roaming | Defensive |

---

## Favored Terrain

**Mechanic:** Species spawns in this terrain type and gains boosts while in this broad terrain category.

**Balance:** Boost strength inversely correlated with terrain desirability.

| Terrain | Desirability | Boost Strength | Notes |
|---------|--------------|----------------|-------|
| **Plains** | High | Low | Easy living, common |
| **Forest** | High | Low | Resources, shelter |
| **Jungle** | Medium | Medium | Dense, dangerous, rich |
| **Mountains** | Medium | Medium | Defensible, sparse |
| **Desert** | Low | High | Harsh, unique resources |
| **Tundra** | Low | High | Extreme cold, sparse |
| **Swamp** | Low | High | Disease, difficult terrain |
| **Volcanic** | Very Low | Very High | Extremely dangerous |
| **Coastal** | Medium | Medium | Trade, fishing, vulnerable |
| **Underground** | Low | High | Hidden, resource-rich |

**Boosts in Favored Terrain:**
- +Movement speed
- +HP regeneration
- +Resource gathering efficiency
- +Combat effectiveness
- +Spawn rate (minor)

---

## Example Species: Leonids

```
Name: Leonids

SIZE: Huge (Bear-scale)
- HP: 2.0x
- Damage: 2.0x
- Spawn Rate: 0.4x
- Pop Cap: 0.4x

LONGEVITY: Ancient Ones
- Life Phase Rate: 1000 ticks/phase
- Can reach Legendary status
- Society of elders and masters

TRAITS SELECTED:
- Fiercely Independent → Harmony: -5 (Individualistic)
- Bloodthirsty → Aggression: +5
- Balanced Curiosity → Curiosity: 5
- Devout → Piety: High
- Razor Claws → +Damage, +Aggression
- Deadly Fangs → +Damage, +Aggression
- Natural Camouflage → Stealth detection

DERIVED HIDDEN STATS:
- Harmony: -5 (strong repulsion, need space, internal conflict)
- Aggression: +7 (bloodthirsty + claws/fangs bonuses)
- Curiosity: 5 (middle)
- Piety: 7+ (high faith generation)

FAVORED TERRAIN: Plains
- Low boost (high desirability terrain)
- Good for hunting, visibility

EXPECTED BEHAVIOR:
- Few, powerful individuals
- Spread out (low harmony = repulsion)
- Violent usurpations (high aggression)
- Long-lived skill farmers
- Strong faith generation
- Stealthy ambush predators
- Each loss is catastrophic
```

---

## Data Structures

### Species Definition (Creation Output)

```typescript
interface SpeciesDefinition {
  name: string;

  // Core Selections
  size: 'diminutive' | 'small' | 'middling' | 'huge' | 'behemoth';
  longevity: 1 | 2 | 3 | 4 | 5; // tier
  diet: 'omnivore' | 'predator' | 'herbivore';
  favoredTerrain: TerrainType;

  // Selected Traits (list of trait IDs)
  traits: string[];

  // Derived Hidden Stats (calculated from traits)
  derivedStats: {
    harmony: number;        // -10 to +10
    aggression: number;     // -10 to +10
    curiosity: number;      // 1-10
    piety: number;          // 1-10
    naturalism: number;     // 1-10
    logos: number;          // 1-10
    sociology: number;      // 1-10
  };

  // Derived Modifiers (calculated from size + traits)
  modifiers: {
    hpMultiplier: number;
    damageMultiplier: number;
    speedMultiplier: number;
    spawnRateMultiplier: number;
    popCapMultiplier: number;
    claimRateMultiplier: number;
    craftingBonus: number;
    visionRange: number;
    detectionRadius: number;
    // ... etc
  };
}
```

### Trait Definition

```typescript
interface TraitDefinition {
  id: string;
  name: string;
  description: string;
  category: 'physical' | 'temperament' | 'intelligence' | 'survival';

  cost: number; // Can be negative (gives points back)

  // Prerequisites
  requires?: string[];      // Required traits
  excludes?: string[];      // Mutually exclusive traits
  sizeRequirement?: string[]; // Required sizes

  // Effects on hidden stats
  statModifiers: {
    harmony?: number;
    aggression?: number;
    curiosity?: number;
    piety?: number;
    naturalism?: number;
    logos?: number;
    sociology?: number;
  };

  // Effects on derived modifiers
  modifierEffects: {
    hpMultiplier?: number;
    damageMultiplier?: number;
    speedMultiplier?: number;
    // ... etc
  };

  // Special flags/behaviors
  special?: {
    stealthDetection?: boolean;
    flightEnabled?: boolean;
    burrowEnabled?: boolean;
    // ... etc
  };
}
```

---

## UI Flow

### Creation Screen Layout

```
╔══════════════════════════════════════════════════════════════╗
║  GENESIS: DESIGN YOUR SPECIES                                ║
║  Creation Points: [47/60]                                    ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  SPECIES NAME: [________________]                            ║
║                                                              ║
║  ┌─ SIZE ─────────────────────────────────────────────────┐  ║
║  │  ○ Diminutive  ○ Small  ● Middling  ○ Huge  ○ Behemoth │  ║
║  │  [Visual preview of size comparison]                   │  ║
║  └────────────────────────────────────────────────────────┘  ║
║                                                              ║
║  ┌─ LONGEVITY ────────────────────────────────────────────┐  ║
║  │  Out Brief Candle ════════●════════════ Ancient Ones   │  ║
║  │  Current: Mortal Span (200 ticks/phase)                │  ║
║  └────────────────────────────────────────────────────────┘  ║
║                                                              ║
║  ┌─ DIET ─────────────────────────────────────────────────┐  ║
║  │  ○ Omnivore (balanced)                                 │  ║
║  │  ○ Predator (hunt or starve)                           │  ║
║  │  ○ Herbivore (harmony bonus)                           │  ║
║  └────────────────────────────────────────────────────────┘  ║
║                                                              ║
║  ┌─ TRAITS ───────────────────────────────────────────────┐  ║
║  │  [Scrollable grid of trait cards]                      │  ║
║  │  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐       │  ║
║  │  │ Thick   │ │ Razor   │ │ Blood-  │ │ Curious │       │  ║
║  │  │ Hide    │ │ Claws   │ │ thirsty │ │         │       │  ║
║  │  │ [2pts]  │ │ [3pts]  │ │ [0pts]  │ │ [2pts]  │       │  ║
║  │  │ ☑       │ │ ☐       │ │ ☑       │ │ ☐       │       │  ║
║  │  └─────────┘ └─────────┘ └─────────┘ └─────────┘       │  ║
║  └────────────────────────────────────────────────────────┘  ║
║                                                              ║
║  ┌─ FAVORED TERRAIN ──────────────────────────────────────┐  ║
║  │  [Visual terrain selector with boost indicators]       │  ║
║  └────────────────────────────────────────────────────────┘  ║
║                                                              ║
║  ┌─ SPECIES PREVIEW ──────────────────────────────────────┐  ║
║  │  [Pixel art preview]   Estimated Behavior:             │  ║
║  │                        • Aggressive lone hunters       │  ║
║  │                        • Slow to spawn, hard to kill   │  ║
║  │                        • High faith, moderate tech     │  ║
║  └────────────────────────────────────────────────────────┘  ║
║                                                              ║
║                              [ DEPLOY SPECIES ]              ║
╚══════════════════════════════════════════════════════════════╝
```

---

## Open Questions

1. **Creation Point Costs:** Need playtesting to determine exact costs for each option
2. **Curiosity ↔ Neural Net:** How does curiosity stat interact with AI decision-making?
3. **Founders Pop Cap:** Currently 3x too high - needs formula adjustment
4. **Equipment Scaling:** Exact multipliers for tool/gear effectiveness
5. **Starvation Mechanics:** Current implementation needs review for Predator diet

---

## Next Steps

1. Implement trait definition data files
2. Create hidden stat derivation formulas
3. Build Creation UI
4. Balance size vs swarm dynamics
5. Implement diet-specific mechanics
6. Test favored terrain boosts
