# DEITY: Balance Considerations

## The Core Balance Problem: Swarm vs Giants

### The Issue

Tiny creatures (Diminutive/Small) have inherent advantages:
- **5x spawn rate** means rapid map coverage
- **5x pop cap** means massive numbers
- Early game dominated by expansion speed
- Physical stats of giants don't directly counter expansion

Giants (Huge/Behemoth) have different advantages:
- **2-4x HP/Damage** per individual
- Slower spawning means each individual is precious
- Long-lived species can skill farm to legendary status
- BUT: What good is a legendary sprite if they only control 10% of the map?

### The Solution: Equipment & Notable Scaling

The key insight: **Individual power must scale to compensate for numbers.**

A fully-equipped sprite with:
- Advanced farming/hunting tools
- A legendary hunter-gatherer notable
- Accumulated gear and resources

Should be able to claim territory at **10x the rate** of a naked swarm sprite.

This creates the balance arc:
```
Early Game:    Swarms dominate (numbers advantage)
Mid Game:      Giants catch up (equipment + XP compound)
Late Game:     Giants potentially dominate (legendary notables)
Endgame:       Balanced - swarm numbers vs giant elites
```

---

## Equipment Effectiveness Scaling

### Proposal: Multiplicative Equipment Bonuses

Equipment bonuses should be **multiplicative, not additive**.

| Equipment Tier | Claim Rate Mult | Gather Rate Mult | Combat Mult |
|----------------|-----------------|------------------|-------------|
| None (Naked)   | 1.0x            | 1.0x             | 1.0x        |
| Primitive      | 1.5x            | 1.3x             | 1.2x        |
| Basic          | 2.0x            | 1.6x             | 1.5x        |
| Advanced       | 3.0x            | 2.0x             | 2.0x        |
| Master-Crafted | 4.0x            | 2.5x             | 2.5x        |
| Legendary      | 5.0x            | 3.0x             | 3.0x        |

### Notable Skill Bonuses

Notable skills should apply to **non-combat activities**, not just fighting.

| Notable Level | Gathering Mult | Claim Mult | Leadership Mult |
|---------------|----------------|------------|-----------------|
| Novice        | 0.8x           | 0.8x       | 0.8x            |
| Blooded       | 1.0x           | 1.0x       | 1.0x            |
| Veteran       | 1.3x           | 1.3x       | 1.2x            |
| Elder         | 1.6x           | 1.6x       | 1.5x            |
| Legendary     | 2.0x           | 2.0x       | 2.0x            |

### Combined Scaling Example

**Behemoth Elder with Master-Crafted Tools:**
- Base claim rate: 0.15x (from size)
- Equipment bonus: 4.0x
- Notable bonus: 1.6x
- **Final claim rate: 0.15 × 4.0 × 1.6 = 0.96x**

This is nearly equivalent to a naked middling sprite!

**Behemoth Legendary with Legendary Tools:**
- Base: 0.15x
- Equipment: 5.0x
- Notable: 2.0x
- **Final: 0.15 × 5.0 × 2.0 = 1.5x**

Now the giant **outperforms** a baseline middling sprite.

**Key Balance Point:** A swarm may have 33x more sprites (5.0/0.15), but if giants can each perform at 10x the efficiency, the swarm only has a 3.3x advantage - which is manageable.

---

## The "Founders" Pop Cap Issue

### Current Issue
The Founders' current pop cap is approximately **3x too high**.

### Recommended Formula Adjustment

Current formula (assumed):
```
PopCap = BaseBiomass × PopCapMultiplier
```

Proposed adjustment:
```
PopCap = (BaseBiomass × PopCapMultiplier) / 3
```

Or alternatively, adjust the PopCapMultiplier values in the size definitions:

| Size      | Current PopCap Mult | Proposed PopCap Mult |
|-----------|---------------------|----------------------|
| Diminutive| 5.0x                | 1.67x                |
| Small     | 3.0x                | 1.0x                 |
| Middling  | 1.0x                | 0.33x                |
| Huge      | 0.4x                | 0.13x                |
| Behemoth  | 0.15x               | 0.05x                |

**Note:** This needs playtesting to determine if the issue is:
- The base biomass calculation
- The pop cap multiplier
- The territory-to-biomass conversion rate

---

## Harmony's Effect on Population

### Current Design
Low harmony should mildly reduce spawn rate and pop cap because:
- Individualists need more living space
- Higher per-capita resource consumption
- But NOT as strongly as size

### Proposed Harmony Scaling

| Harmony Level | Spawn Rate Mod | Pop Cap Mod |
|---------------|----------------|-------------|
| -10 (Hyper-Individualist) | 0.70x | 0.70x |
| -5  | 0.85x | 0.85x |
| 0 (Neutral) | 1.00x | 1.00x |
| +5  | 1.10x | 1.10x |
| +10 (Hive Mind) | 1.20x | 1.20x |

**Combined with Size Example (Leonids):**
- Size: Huge → 0.4x spawn/pop
- Harmony: -5 (Individualistic) → 0.85x
- **Final: 0.4 × 0.85 = 0.34x spawn/pop**

This is a significant further reduction, emphasizing the "few but powerful" playstyle.

---

## Longevity & Experience Gain

### Current Design Questions
1. How many ticks from Novice → Legendary?
2. Does experience scale with activity or just time alive?

### Proposed Experience System

**Experience Sources:**
- Time alive: +1 XP per tick (passive)
- Surviving combat: +10 XP per encounter
- Successful actions: +5 XP per significant action (claiming, building, etc.)
- Events survived: +20 XP per era event survived

**Level Thresholds:**
| Phase     | XP Required | Cumulative XP |
|-----------|-------------|---------------|
| Novice    | 0           | 0             |
| Blooded   | 100         | 100           |
| Veteran   | 250         | 350           |
| Elder     | 500         | 850           |
| Legendary | 1000        | 1850          |

**With Passive XP Only (1 XP/tick):**
- Novice → Legendary: 1850 ticks

**Longevity Tier vs Achievement:**

| Longevity | Ticks/Phase | Max Ticks Alive | Can Reach Legendary? |
|-----------|-------------|-----------------|----------------------|
| Mayfly (1) | 50 | 150 (3 phases) | Never (150 XP max passive) |
| Brief Candle (2) | 100 | 400 (4 phases) | Rare (need lots of combat) |
| Mortal Span (3) | 200 | 1000 (5 phases) | Possible with activity |
| Long-Lived (4) | 400 | 2000 (5 phases) | Likely |
| Ancient Ones (5) | 1000 | 5000 (5 phases) | Guaranteed |

**Key Insight:** Even with max longevity, reaching Legendary requires surviving long enough. Combat and activity accelerate progression, but also risk death.

---

## Intraspecies Dynamics

### Sprite Repulsion (Harmony Effect)

Low harmony species should have sprites that actively avoid each other.

| Harmony | Repulsion Radius | Repulsion Strength |
|---------|------------------|-------------------|
| -10     | 10 tiles         | Strong            |
| -5      | 5 tiles          | Moderate          |
| 0       | 2 tiles          | Weak              |
| +5      | 0 tiles          | None              |
| +10     | -2 tiles (attraction) | Flocking behavior |

### Usurpation Violence (Aggression + Harmony)

When Authority shifts trigger leadership change:

```
ViolenceChance = (SpeciesAggression + ChallengerAggression - Harmony) / 20
```

| Scenario | Aggression | Harmony | Violence % |
|----------|------------|---------|------------|
| Peaceful Elves | -3 | +5 | 0% (peaceful) |
| Tribal Warriors | +3 | +2 | 25% |
| Lone Berserkers | +5 | -5 | 75% |
| Bloodthirsty Loners | +8 | -8 | 100% (always violent) |

---

## Combat Balance Across Sizes

### The Problem
A Behemoth (4x HP, 3x damage) vs a Swarm of Diminutives:
- Behemoth: 400 HP, 30 damage
- Diminutive: 30 HP, 3 damage
- Swarm can send 33 sprites (5.0/0.15 ratio)

**Math:**
- Behemoth kills 1 diminutive per attack (30 > 30 HP)
- 33 Diminutives deal 99 damage per round
- Behemoth dies in ~4 rounds, killing 4 diminutives
- **Swarm wins decisively** (29 survivors)

### Proposed Solutions

**1. Area Damage for Large Creatures**
Huge+ creatures deal damage to multiple adjacent sprites:
- Huge: Hits 2 targets per attack
- Behemoth: Hits 4 targets per attack

**2. Intimidation/Morale System**
Large creatures cause morale checks:
- Small creatures may flee rather than fight
- Swarm cohesion breaks against titans

**3. Combat Efficiency Scaling**
Larger creatures have inherent combat bonuses:
- Huge: +25% damage efficiency
- Behemoth: +50% damage efficiency

**Revised Math with Area Damage:**
- Behemoth hits 4 targets per round, killing 4 diminutives
- Takes 29 × 3 = 87 damage per round (if all engaged)
- But diminutives can only engage 8 at a time (surrounding)
- Behemoth takes 24 damage/round, lasts 16+ rounds
- Kills 64 diminutives before dying
- **Behemoth wins** (needs only 33 to break even)

---

## Summary: Key Balance Levers

1. **Equipment Scaling** - Must be multiplicative and significant (up to 5x)
2. **Notable Skills** - Apply to ALL activities, not just combat
3. **Area Damage** - Large creatures hit multiple small targets
4. **Repulsion Mechanics** - Low harmony spreads sprites out (counters swarm clustering)
5. **Pop Cap Formula** - Current is 3x too high (needs /3 adjustment)
6. **Morale System** - Large creatures intimidate small ones

## Testing Priorities

1. Simulate 100 ticks with Diminutive swarm vs Behemoth few
2. Track territory control over time
3. Measure when/if giants catch up with equipment
4. Test usurpation rates across aggression/harmony combinations
5. Verify legendary achievement rates for each longevity tier
