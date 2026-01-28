# DEITY: Expanded Trait Encyclopedia

## Overview

This encyclopedia compiles biological traits and adaptations from across the natural world for use in the Genesis (Species Creation) stage. Traits are organized by source inspiration and include mechanical implementations compatible with the DEITY game system.

Each trait entry includes:
- **Name**: Game-friendly trait name
- **Inspiration**: Real-world biological examples
- **Cost**: Creation point cost (negative = grants points)
- **Category**: Physical, Temperament, Mental, or Survival
- **Effects**: Mechanical impacts on hidden stats and gameplay modifiers

---

# PART I: MAMMALIAN TRAITS

## 1. Social Structure Traits

### Pack Hunter
- **Inspiration**: Wolves, African wild dogs, lions
- **Cost**: 8
- **Category**: Temperament
- **Effects**:
  - `harmony: +3`
  - `aggression: +2`
  - `allyBonus: +0.25` (25% bonus when fighting alongside allies)
  - `huntingSuccess: +0.2`
- **Excludes**: Solitary Hunter, Ambush Predator

### Solitary Hunter
- **Inspiration**: Tigers, leopards, polar bears
- **Cost**: 6
- **Category**: Temperament
- **Effects**:
  - `harmony: -3`
  - `aggression: +2`
  - `soloBonus: +0.3` (30% bonus when fighting alone)
  - `territoryAttachment: +0.2`
- **Excludes**: Pack Hunter, Hive Mind

### Matriarchal Society
- **Inspiration**: Elephants, orcas, spotted hyenas
- **Cost**: 5
- **Category**: Temperament
- **Effects**:
  - `harmony: +2`
  - `sociology: +2`
  - `elderBonus: +0.3` (Elders grant larger bonuses)
  - Female notables gain +1 Authority

### Harem Structure
- **Inspiration**: Lions, gorillas, elephant seals
- **Cost**: 4
- **Category**: Temperament
- **Effects**:
  - `aggression: +1`
  - `harmony: -1`
  - Leader notable gains +2 Authority
  - Usurpation violence chance +20%

### Colony Dwellers
- **Inspiration**: Prairie dogs, meerkats, naked mole rats
- **Cost**: 7
- **Category**: Temperament
- **Effects**:
  - `harmony: +4`
  - `threatDetection: +0.3`
  - `burrowEnabled: true`
  - `popCapMultiplier: 1.15`

### Nomadic Bands
- **Inspiration**: Wildebeest, caribou, bison
- **Cost**: 5
- **Category**: Temperament
- **Effects**:
  - `harmony: +1`
  - `speedMultiplier: 1.1`
  - `roamingPenalty: -0.5` (reduced penalty for roaming)
  - `territoryAttachment: -0.3`

---

## 2. Thermoregulation Traits

### Thick Fur
- **Inspiration**: Arctic foxes, musk oxen, yaks
- **Cost**: 4
- **Category**: Physical
- **Effects**:
  - `coldResistance: true`
  - `tundraBonus: +0.2`
  - `heatResistance: false` (vulnerable to heat)
- **Excludes**: Bare Skin, Aquatic Mammal

### Bare Skin
- **Inspiration**: Elephants, hippos, humans
- **Cost**: 3
- **Category**: Physical
- **Effects**:
  - `heatResistance: true`
  - `adaptability: +0.1`
  - `coldResistance: false` (vulnerable to cold)
- **Excludes**: Thick Fur, Armored Hide

### Blubber Layer
- **Inspiration**: Whales, seals, walruses
- **Cost**: 6
- **Category**: Physical
- **Effects**:
  - `coldResistance: true`
  - `swimSpeedMultiplier: 1.1`
  - `hpMultiplier: 1.1`
  - `landSpeedMultiplier: 0.85`
- **Requires**: Aquatic Mammal or Semi-Aquatic

---

## 3. Locomotion Traits

### Brachiation
- **Inspiration**: Gibbons, spider monkeys, orangutans
- **Cost**: 5
- **Category**: Physical
- **Effects**:
  - `speedMultiplier: 1.15` (in forests)
  - Favored terrain: Forest gains +0.15 bonus
  - `terrainCostMultiplier: 0.7` (forest terrain)

### Quadrupedal Sprinter
- **Inspiration**: Cheetahs, pronghorns, greyhounds
- **Cost**: 7
- **Category**: Physical
- **Effects**:
  - `speedMultiplier: 1.4`
  - `huntingSuccess: +0.25`
  - `starvationResistance: -0.1` (high metabolism cost)
- **Excludes**: Burrower, Aquatic Mammal

### Knuckle Walker
- **Inspiration**: Gorillas, chimpanzees
- **Cost**: 4
- **Category**: Physical
- **Effects**:
  - `damageMultiplier: 1.15`
  - `toolEffectiveness: 1.1`
  - `speedMultiplier: 0.95`

### Saltatorial (Hopping)
- **Inspiration**: Kangaroos, jerboas, springhares
- **Cost**: 4
- **Category**: Physical
- **Effects**:
  - `speedMultiplier: 1.2`
  - `terrainCostMultiplier: 0.8` (rough terrain)
  - `biomassPerSprite: 0.9` (efficient movement)

### Semi-Aquatic
- **Inspiration**: Otters, beavers, platypus
- **Cost**: 6
- **Category**: Physical
- **Effects**:
  - `swimSpeedMultiplier: 1.3`
  - `waterBreathing: false` (but extended breath-holding)
  - Coastal/swamp terrain bonuses +0.15
- **Excludes**: Desert Adapted

### Fully Aquatic
- **Inspiration**: Dolphins, whales, manatees
- **Cost**: 8
- **Category**: Physical
- **Effects**:
  - `swimSpeedMultiplier: 1.5`
  - `waterBreathing: true` (effective)
  - `landSpeedMultiplier: 0.0` (cannot traverse land)
- **Excludes**: All land-based traits

---

## 4. Sensory Traits

### Echolocation
- **Inspiration**: Bats, dolphins, shrews
- **Cost**: 8
- **Category**: Physical
- **Effects**:
  - `darkVision: true`
  - `detectionRadius: +0.4`
  - `stealthDetection: true`
  - `visionRange: 0.7` (reduced normal vision)

### Electroreception
- **Inspiration**: Platypus, echidnas
- **Cost**: 7
- **Category**: Physical
- **Effects**:
  - `detectionRadius: +0.3` (underwater/underground)
  - `huntingSuccess: +0.2`
  - `stealthDetection: true` (vs burrowing/swimming prey)
- **Requires**: Semi-Aquatic or Burrower

### Infrared Sensing
- **Inspiration**: Vampire bats (thermal detection)
- **Cost**: 5
- **Category**: Physical
- **Effects**:
  - `threatDetection: +0.2`
  - `huntingSuccess: +0.15`
  - `darkVision: true`

### Keen Scent
- **Inspiration**: Bloodhounds, wolves, bears
- **Cost**: 5
- **Category**: Physical
- **Effects**:
  - `trackingBonus: +0.3`
  - `detectionRadius: +0.2`
  - `huntingSuccess: +0.1`

### Whisker Sensitivity
- **Inspiration**: Seals, cats, rats
- **Cost**: 3
- **Category**: Physical
- **Effects**:
  - `darkVision: true` (partial, close range)
  - `detectionRadius: +0.1`
  - `huntingSuccess: +0.05`

---

## 5. Defense Traits

### Quill Defense
- **Inspiration**: Porcupines, hedgehogs, echidnas
- **Cost**: 6
- **Category**: Physical
- **Effects**:
  - Attackers take 20% damage reflected
  - `panicResistance: +0.2`
  - `speedMultiplier: 0.9`
- **Excludes**: Thick Fur, Bare Skin

### Spray Defense
- **Inspiration**: Skunks, zorillas
- **Cost**: 4
- **Category**: Physical
- **Effects**:
  - `panicResistance: +0.3`
  - Enemies suffer morale penalty when engaged
  - `harmony: -1` (unpleasant to live near)

### Playing Dead
- **Inspiration**: Opossums, hognose snakes
- **Cost**: 3
- **Category**: Survival
- **Effects**:
  - 30% chance to avoid death when HP reaches 0
  - `aggression: -2`
  - `panicResistance: +0.1`

### Armored Hide
- **Inspiration**: Armadillos, pangolins
- **Cost**: 7
- **Category**: Physical
- **Effects**:
  - `hpMultiplier: 1.3`
  - `speedMultiplier: 0.85`
  - Physical damage reduction 15%

---

## 6. Metabolic Traits

### Hibernation
- **Inspiration**: Bears, ground squirrels, dormice
- **Cost**: 5
- **Category**: Survival
- **Effects**:
  - `starvationResistance: +0.4`
  - Survives winter phases without food
  - `spawnRateMultiplier: 0.9` (slower breeding)
- **Excludes**: High Metabolism

### Torpor
- **Inspiration**: Hummingbirds, bats (daily torpor)
- **Cost**: 4
- **Category**: Survival
- **Effects**:
  - `starvationResistance: +0.2`
  - `biomassPerSprite: 0.85`
  - Can survive resource scarcity better

### High Metabolism
- **Inspiration**: Shrews, hummingbirds
- **Cost**: -3 (grants points)
- **Category**: Survival
- **Effects**:
  - `spawnRateMultiplier: 1.2`
  - `speedMultiplier: 1.1`
  - `starvationResistance: -0.3`
- **Excludes**: Hibernation, Torpor

### Ruminant Digestion
- **Inspiration**: Cattle, deer, giraffes
- **Cost**: 4
- **Category**: Physical
- **Effects**:
  - `foragingBonus: +0.25`
  - Can extract nutrition from low-quality vegetation
  - `speedMultiplier: 0.95`
- **Requires**: Herbivore diet

---

## 7. Reproduction Traits

### Marsupial Pouch
- **Inspiration**: Kangaroos, opossums, koalas
- **Cost**: 3
- **Category**: Physical
- **Effects**:
  - Young notables gain protection bonus
  - `spawnRateMultiplier: 0.9`
  - Young reach Blooded phase faster

### Monotreme
- **Inspiration**: Platypus, echidnas
- **Cost**: 4
- **Category**: Physical
- **Effects**:
  - `diseaseResistance: +0.15`
  - Venomous spur option available
  - `spawnRateMultiplier: 0.85`

### Prolific Breeder
- **Inspiration**: Mice, rabbits, rats
- **Cost**: 6
- **Category**: Physical
- **Effects**:
  - `spawnRateMultiplier: 1.4`
  - `popCapMultiplier: 1.2`
  - Individual HP reduced 10%
- **Size Requirement**: Diminutive, Small

### Delayed Implantation
- **Inspiration**: Bears, badgers, seals
- **Cost**: 3
- **Category**: Survival
- **Effects**:
  - Spawn timing optimized for resources
  - `starvationResistance: +0.1`
  - Offspring quality bonus +5%

---

## 8. Specialized Mammal Traits

### Prehensile Tail
- **Inspiration**: Spider monkeys, opossums, kinkajous
- **Cost**: 4
- **Category**: Physical
- **Effects**:
  - `toolEffectiveness: 1.1`
  - Forest terrain bonus +0.1
  - `claimRateMultiplier: 1.05`

### Trunk/Proboscis
- **Inspiration**: Elephants, tapirs
- **Cost**: 6
- **Category**: Physical
- **Effects**:
  - `toolEffectiveness: 1.2`
  - `foragingBonus: +0.2`
  - `signalRange: +0.2`
- **Size Requirement**: Huge, Behemoth

### Tusks
- **Inspiration**: Elephants, walruses, warthogs
- **Cost**: 5
- **Category**: Physical
- **Effects**:
  - `damageMultiplier: 1.15`
  - `claimResistance: +0.1`
  - Tool use capability bonus

### Antlers (Seasonal)
- **Inspiration**: Deer, moose, elk
- **Cost**: 4
- **Category**: Physical
- **Effects**:
  - Seasonal combat bonus (+25% during rut)
  - `aggression: +1`
  - Usurpation involves less lethality

### Horns (Permanent)
- **Inspiration**: Cattle, goats, rhinos
- **Cost**: 5
- **Category**: Physical
- **Effects**:
  - `damageMultiplier: 1.1`
  - `homeDefenseBonus: +0.15`
  - Both genders gain benefit

---

# PART II: REPTILIAN & AMPHIBIAN TRAITS

## 1. Thermoregulation Traits

### Cold-Blooded (Ectothermic)
- **Inspiration**: All reptiles, amphibians
- **Cost**: -4 (grants points)
- **Category**: Physical
- **Effects**:
  - `biomassPerSprite: 0.7` (low food requirements)
  - `speedMultiplier: 0.9` (in cold)
  - `speedMultiplier: 1.1` (in heat)
  - Activity dependent on ambient temperature

### Basking Behavior
- **Inspiration**: Lizards, turtles, crocodiles
- **Cost**: 2
- **Category**: Survival
- **Effects**:
  - `heatResistance: true`
  - Desert/volcanic terrain bonus +0.1
  - Requires warm-up time each day phase

---

## 2. Defensive Adaptations

### Hard Shell
- **Inspiration**: Turtles, tortoises
- **Cost**: 8
- **Category**: Physical
- **Effects**:
  - `hpMultiplier: 1.5`
  - `speedMultiplier: 0.6`
  - Can fully retract for 50% damage reduction
- **Excludes**: All speed-based traits

### Scale Armor
- **Inspiration**: Crocodiles, armadillo lizards
- **Cost**: 5
- **Category**: Physical
- **Effects**:
  - `hpMultiplier: 1.2`
  - `swimSpeedMultiplier: 1.1`
  - Physical damage reduction 10%

### Tail Autotomy
- **Inspiration**: Lizards, salamanders
- **Cost**: 4
- **Category**: Survival
- **Effects**:
  - 40% chance to escape lethal attack
  - `panicResistance: +0.2`
  - Temporary stat reduction after escape

### Horned Lizard Defense
- **Inspiration**: Horned lizards (blood squirting)
- **Cost**: 3
- **Category**: Physical
- **Effects**:
  - Predators suffer morale penalty
  - `panicResistance: +0.15`
  - `harmony: -1`

### Frill Display
- **Inspiration**: Frilled lizards, basilisks
- **Cost**: 3
- **Category**: Physical
- **Effects**:
  - `moraleResistance: +0.2`
  - Intimidation effect vs smaller creatures
  - `aggression: +1`

---

## 3. Offensive Adaptations

### Constrictor
- **Inspiration**: Pythons, boas, anacondas
- **Cost**: 6
- **Category**: Physical
- **Effects**:
  - `grappleBonus: +0.4`
  - `damageMultiplier: 1.2` (vs grappled)
  - `huntingSuccess: +0.15`
- **Excludes**: Venomous Bite

### Venomous Bite (Hemotoxic)
- **Inspiration**: Vipers, pit vipers
- **Cost**: 7
- **Category**: Physical
- **Effects**:
  - `poisonDamage: 0.3` (damage over time)
  - `huntingSuccess: +0.2`
  - `aggression: +1`

### Venomous Bite (Neurotoxic)
- **Inspiration**: Cobras, mambas, coral snakes
- **Cost**: 8
- **Category**: Physical
- **Effects**:
  - `poisonDamage: 0.4` (faster acting)
  - Target speed reduced 50%
  - `aggression: +2`

### Venomous Spit
- **Inspiration**: Spitting cobras
- **Cost**: 6
- **Category**: Physical
- **Effects**:
  - Ranged venom attack
  - Target vision impaired
  - `aggression: +1`
- **Requires**: Venomous Bite (any type)

### Death Roll
- **Inspiration**: Crocodiles, alligators
- **Cost**: 5
- **Category**: Physical
- **Effects**:
  - `damageMultiplier: 1.3` (vs grappled in water)
  - `grappleBonus: +0.2`
- **Requires**: Semi-Aquatic or Fully Aquatic

### Komodo Bacteria
- **Inspiration**: Komodo dragons (septic bite)
- **Cost**: 5
- **Category**: Physical
- **Effects**:
  - Bitten targets suffer ongoing damage
  - `diseaseResistance: +0.2` (self)
  - Prey tracked by scent after bite

---

## 4. Sensory Adaptations

### Pit Organs
- **Inspiration**: Pit vipers, pythons, boas
- **Cost**: 6
- **Category**: Physical
- **Effects**:
  - `darkVision: true`
  - `huntingSuccess: +0.2` (vs warm-blooded)
  - `detectionRadius: +0.15`

### Jacobson's Organ
- **Inspiration**: Snakes, monitor lizards
- **Cost**: 4
- **Category**: Physical
- **Effects**:
  - `trackingBonus: +0.25`
  - Chemical trail detection
  - `detectionRadius: +0.1`

### Third Eye (Parietal)
- **Inspiration**: Tuatara, some lizards
- **Cost**: 3
- **Category**: Physical
- **Effects**:
  - `threatDetection: +0.15` (aerial threats)
  - Day/night cycle awareness
  - `panicResistance: +0.1`

---

## 5. Amphibian-Specific Traits

### Metamorphosis (Amphibian)
- **Inspiration**: Frogs, salamanders
- **Cost**: 4
- **Category**: Physical
- **Effects**:
  - Youth phase: aquatic only
  - Adult phase: semi-aquatic
  - `adaptability: +0.15`

### Mucus Coating
- **Inspiration**: Frogs, salamanders
- **Cost**: 3
- **Category**: Physical
- **Effects**:
  - `diseaseResistance: +0.15`
  - `grappleBonus: -0.2` (hard to grab)
  - Requires moisture

### Toxic Skin
- **Inspiration**: Poison dart frogs, fire salamanders
- **Cost**: 7
- **Category**: Physical
- **Effects**:
  - Contact damage to attackers
  - `panicResistance: +0.3`
  - Warning coloration deters predators

### Regeneration (Limb)
- **Inspiration**: Salamanders, axolotls
- **Cost**: 8
- **Category**: Physical
- **Effects**:
  - `hpRegenRate: +0.3`
  - Can recover from grievous wounds
  - Slower natural healing initially

### Neoteny
- **Inspiration**: Axolotls, mudpuppies
- **Cost**: 4
- **Category**: Physical
- **Effects**:
  - Retains aquatic adaptations permanently
  - `waterBreathing: true`
  - `landSpeedMultiplier: 0.5`

### Vocal Sac
- **Inspiration**: Frogs, toads
- **Cost**: 3
- **Category**: Physical
- **Effects**:
  - `signalRange: +0.3`
  - Mating/territory communication bonus
  - `harmony: +1`

---

## 6. Specialized Reptile Traits

### Chameleon Camouflage
- **Inspiration**: Chameleons, cuttlefish (convergent)
- **Cost**: 7
- **Category**: Physical
- **Effects**:
  - Ambush bonus +30%
  - `stealthDetection: -0.2` (vs self)
  - `detectionRadius: +0.1` (independent eyes)

### Gecko Adhesion
- **Inspiration**: Geckos
- **Cost**: 4
- **Category**: Physical
- **Effects**:
  - Vertical surface traversal
  - `terrainCostMultiplier: 0.8` (rocky/urban)
  - `speedMultiplier: 1.05`

### Crocodilian Patience
- **Inspiration**: Crocodiles (ambush hunting)
- **Cost**: 5
- **Category**: Temperament
- **Effects**:
  - `starvationResistance: +0.3`
  - Ambush bonus +40%
  - `aggression: +2`
  - `speedMultiplier: 0.85` (sustained)

### Marine Iguana Adaptation
- **Inspiration**: Marine iguanas
- **Cost**: 5
- **Category**: Physical
- **Effects**:
  - Cold water diving capability
  - `swimSpeedMultiplier: 1.2`
  - Algae feeding (herbivore aquatic option)

---

# PART III: INSECT & ARACHNID TRAITS

## 1. Social Organization Traits

### Eusocial Hive
- **Inspiration**: Ants, bees, termites
- **Cost**: 10
- **Category**: Temperament
- **Effects**:
  - `harmony: +8`
  - `popCapMultiplier: 2.0`
  - `spawnRateMultiplier: 1.5`
  - Individual HP reduced 50%
  - Queen notable required
- **Excludes**: Solitary Hunter, all individualist traits

### Caste System
- **Inspiration**: Ants, termites
- **Cost**: 6
- **Category**: Temperament
- **Effects**:
  - Specialized worker types
  - `craftingBonus: +0.2` (workers)
  - `damageMultiplier: 1.3` (soldiers)
- **Requires**: Eusocial Hive

### Swarm Intelligence
- **Inspiration**: Bees, ants (collective decision making)
- **Cost**: 7
- **Category**: Mental
- **Effects**:
  - `logos: +2`
  - `sociology: +3`
  - Group decisions more optimal
  - Individual `curiosity: -2`
- **Requires**: Eusocial Hive or Colony Dwellers

### Parasitoid
- **Inspiration**: Parasitic wasps, bot flies
- **Cost**: 5
- **Category**: Survival
- **Effects**:
  - Can use enemy spawns as hosts
  - `aggression: +3`
  - `harmony: -4`
  - `piety: -2`
- **Excludes**: Herbivore diet

---

## 2. Exoskeleton Traits

### Chitinous Armor
- **Inspiration**: Beetles, crabs
- **Cost**: 5
- **Category**: Physical
- **Effects**:
  - `hpMultiplier: 1.2`
  - Physical damage reduction 10%
  - `speedMultiplier: 0.95`

### Molting Growth
- **Inspiration**: All arthropods
- **Cost**: 2
- **Category**: Physical
- **Effects**:
  - Periodic vulnerability during molts
  - Growth potential unlimited
  - `hpRegenRate: +0.1` (between molts)

### Hardened Carapace
- **Inspiration**: Ironclad beetles, horseshoe crabs
- **Cost**: 7
- **Category**: Physical
- **Effects**:
  - `hpMultiplier: 1.4`
  - Crushing damage resistance
  - `speedMultiplier: 0.8`
- **Requires**: Chitinous Armor

---

## 3. Locomotion Traits

### Insect Flight
- **Inspiration**: Flies, bees, dragonflies
- **Cost**: 8
- **Category**: Physical
- **Effects**:
  - `flightEnabled: true`
  - `speedMultiplier: 1.3`
  - `terrainCostMultiplier: 0.5`
  - Vulnerable to wind
- **Size Requirement**: Diminutive, Small

### Elytra Wings
- **Inspiration**: Beetles
- **Cost**: 6
- **Category**: Physical
- **Effects**:
  - `flightEnabled: true`
  - `speedMultiplier: 1.1`
  - Wing covers provide armor bonus
- **Requires**: Chitinous Armor

### Wall Climbing
- **Inspiration**: Spiders, many insects
- **Cost**: 4
- **Category**: Physical
- **Effects**:
  - Vertical surface traversal
  - `terrainCostMultiplier: 0.8`
  - Cave/urban bonuses +0.1

### Water Striding
- **Inspiration**: Water striders, fishing spiders
- **Cost**: 4
- **Category**: Physical
- **Effects**:
  - Walk on water surface
  - `swimSpeedMultiplier: 1.2` (surface)
  - Swamp/coastal bonus +0.15
- **Size Requirement**: Diminutive

### Jumping Spider Leap
- **Inspiration**: Jumping spiders, fleas
- **Cost**: 5
- **Category**: Physical
- **Effects**:
  - Leap 20x body length
  - Ambush bonus +25%
  - `speedMultiplier: 1.15` (burst)

---

## 4. Sensory Traits

### Compound Eyes
- **Inspiration**: Flies, dragonflies
- **Cost**: 4
- **Category**: Physical
- **Effects**:
  - `visionRange: 0.8` (detail reduced)
  - Motion detection +40%
  - `threatDetection: +0.2`
  - 360-degree vision

### Antennae (Chemoreceptor)
- **Inspiration**: Moths, ants, bees
- **Cost**: 4
- **Category**: Physical
- **Effects**:
  - `trackingBonus: +0.2`
  - Pheromone communication
  - `signalRange: +0.3`

### Spider Vibration Sense
- **Inspiration**: Web-building spiders
- **Cost**: 5
- **Category**: Physical
- **Effects**:
  - `detectionRadius: +0.25` (on web/ground)
  - `stealthDetection: true` (movement-based)
  - `darkVision: true` (functional)

### Polarized Light Vision
- **Inspiration**: Mantis shrimp, bees
- **Cost**: 3
- **Category**: Physical
- **Effects**:
  - Navigation bonus +20%
  - `visionRange: 1.1`
  - Communication via light patterns

---

## 5. Offensive Traits

### Venomous Sting
- **Inspiration**: Scorpions, bees, wasps
- **Cost**: 6
- **Category**: Physical
- **Effects**:
  - `poisonDamage: 0.25`
  - `damageMultiplier: 1.1`
  - Defensive use primary

### Spider Venom
- **Inspiration**: Black widows, funnel-webs
- **Cost**: 7
- **Category**: Physical
- **Effects**:
  - `poisonDamage: 0.35`
  - Prey paralysis effect
  - `huntingSuccess: +0.2`

### Mantis Strike
- **Inspiration**: Praying mantis, mantis shrimp
- **Cost**: 6
- **Category**: Physical
- **Effects**:
  - First strike bonus +50%
  - `damageMultiplier: 1.25`
  - `aggression: +2`

### Acid Spray
- **Inspiration**: Bombardier beetles, vinegaroons
- **Cost**: 6
- **Category**: Physical
- **Effects**:
  - Ranged chemical attack
  - Area damage capability
  - `panicResistance: +0.2`

### Mandible Crush
- **Inspiration**: Stag beetles, army ants
- **Cost**: 5
- **Category**: Physical
- **Effects**:
  - `damageMultiplier: 1.2`
  - `grappleBonus: +0.2`
  - Armor-piercing capability

---

## 6. Web & Silk Traits

### Web Builder
- **Inspiration**: Orb weavers, cobweb spiders
- **Cost**: 6
- **Category**: Physical
- **Effects**:
  - Trap creation capability
  - `homeDefenseBonus: +0.3`
  - `huntingSuccess: +0.2` (passive)
  - Terrain modification

### Silk Production
- **Inspiration**: Spiders, silkworms
- **Cost**: 5
- **Category**: Physical
- **Effects**:
  - `craftingBonus: +0.25`
  - Building material production
  - Escape line capability

### Trapdoor Ambush
- **Inspiration**: Trapdoor spiders
- **Cost**: 5
- **Category**: Physical
- **Effects**:
  - Ambush bonus +40%
  - `homeDefenseBonus: +0.2`
  - `burrowEnabled: true`
- **Requires**: Silk Production

---

## 7. Survival Traits

### Desiccation Resistance
- **Inspiration**: Desert beetles, tardigrades
- **Cost**: 5
- **Category**: Survival
- **Effects**:
  - `starvationResistance: +0.3`
  - Desert bonus +0.2
  - Water efficiency doubled

### Bioluminescence (Insect)
- **Inspiration**: Fireflies, glow worms
- **Cost**: 4
- **Category**: Physical
- **Effects**:
  - `producesLight: true`
  - Communication via light
  - `signalRange: +0.2`
  - `stealthDetection: -0.1` (vs self)

### Cryptic Coloration
- **Inspiration**: Stick insects, leaf insects
- **Cost**: 5
- **Category**: Physical
- **Effects**:
  - Ambush bonus +30%
  - `panicResistance: +0.2`
  - Predator avoidance +25%

### Aposematic Warning
- **Inspiration**: Poison dart frogs, monarch butterflies
- **Cost**: 4
- **Category**: Physical
- **Effects**:
  - Predator deterrence
  - `panicResistance: +0.25`
- **Requires**: Toxic trait (any type)

---

## 8. Metamorphosis Traits

### Complete Metamorphosis
- **Inspiration**: Butterflies, beetles, flies
- **Cost**: 5
- **Category**: Physical
- **Effects**:
  - Larval stage: +30% growth rate
  - Pupal stage: vulnerability
  - Adult stage: full capabilities
  - `adaptability: +0.2`

### Incomplete Metamorphosis
- **Inspiration**: Grasshoppers, dragonflies, cockroaches
- **Cost**: 3
- **Category**: Physical
- **Effects**:
  - Gradual development
  - No vulnerable pupa stage
  - Nymphs have combat capability
  - `spawnRateMultiplier: 1.1`

---

# PART IV: AVIAN TRAITS

## 1. Flight Traits

### Powered Flight
- **Inspiration**: Most birds
- **Cost**: 10
- **Category**: Physical
- **Effects**:
  - `flightEnabled: true`
  - `speedMultiplier: 1.4`
  - `terrainCostMultiplier: 0.4`
  - High metabolism cost
- **Size Requirement**: Diminutive, Small, Middling

### Soaring Flight
- **Inspiration**: Eagles, vultures, albatrosses
- **Cost**: 8
- **Category**: Physical
- **Effects**:
  - `flightEnabled: true`
  - `speedMultiplier: 1.2`
  - Low energy cost
  - `visionRange: 1.5`
  - Requires thermals/wind
- **Size Requirement**: Small, Middling, Huge

### Hovering
- **Inspiration**: Hummingbirds, kestrels
- **Cost**: 6
- **Category**: Physical
- **Effects**:
  - Stationary flight capability
  - `foragingBonus: +0.2`
  - Very high metabolism
- **Requires**: Powered Flight
- **Size Requirement**: Diminutive, Small

### Flightless
- **Inspiration**: Ostriches, penguins, kiwis
- **Cost**: -5 (grants points)
- **Category**: Physical
- **Effects**:
  - `flightEnabled: false`
  - `speedMultiplier: 1.2` (ground)
  - `hpMultiplier: 1.1`
  - Allows larger sizes
- **Excludes**: All flight traits

### Diving Flight
- **Inspiration**: Gannets, kingfishers, ospreys
- **Cost**: 5
- **Category**: Physical
- **Effects**:
  - Aerial hunting bonus +30%
  - `huntingSuccess: +0.2` (aquatic prey)
  - `damageMultiplier: 1.2` (dive attacks)
- **Requires**: Powered Flight or Soaring Flight

---

## 2. Predator Adaptations

### Raptor Talons
- **Inspiration**: Eagles, hawks, owls
- **Cost**: 6
- **Category**: Physical
- **Effects**:
  - `damageMultiplier: 1.25`
  - `grappleBonus: +0.3`
  - `huntingSuccess: +0.2`

### Hooked Beak
- **Inspiration**: Raptors, shrikes
- **Cost**: 4
- **Category**: Physical
- **Effects**:
  - `damageMultiplier: 1.1`
  - Tearing capability
  - `huntingSuccess: +0.1`

### Silent Flight
- **Inspiration**: Owls
- **Cost**: 5
- **Category**: Physical
- **Effects**:
  - Ambush bonus +35%
  - `stealthDetection: -0.2` (vs self)
  - `speedMultiplier: 0.95`
- **Requires**: Powered Flight

### Pursuit Predator (Avian)
- **Inspiration**: Peregrine falcons, goshawks
- **Cost**: 7
- **Category**: Physical
- **Effects**:
  - `speedMultiplier: 1.5` (pursuit)
  - `huntingSuccess: +0.25`
  - `starvationResistance: -0.1`
- **Requires**: Powered Flight

---

## 3. Sensory Traits

### Eagle Vision
- **Inspiration**: Eagles, hawks
- **Cost**: 6
- **Category**: Physical
- **Effects**:
  - `visionRange: 2.0`
  - `detectionRadius: +0.3`
  - `huntingSuccess: +0.15`

### Owl Night Vision
- **Inspiration**: Owls
- **Cost**: 6
- **Category**: Physical
- **Effects**:
  - `darkVision: true`
  - `visionRange: 1.3`
  - Asymmetric ears for sound location
  - `detectionRadius: +0.2`

### Magnetic Navigation
- **Inspiration**: Migratory birds
- **Cost**: 4
- **Category**: Physical
- **Effects**:
  - Long-distance navigation bonus
  - `roamingPenalty: -0.3`
  - Migration capability

### Kiwi Sensory Bill
- **Inspiration**: Kiwis
- **Cost**: 4
- **Category**: Physical
- **Effects**:
  - `darkVision: true`
  - `trackingBonus: +0.2`
  - Ground-based prey detection
- **Requires**: Flightless

---

## 4. Social & Communication Traits

### Corvid Intelligence
- **Inspiration**: Crows, ravens, magpies
- **Cost**: 10
- **Category**: Mental
- **Effects**:
  - `curiosity: +3`
  - `logos: +2`
  - `toolEffectiveness: 1.3`
  - `deceptionBonus: +0.2`
  - Problem-solving capability

### Songbird Communication
- **Inspiration**: Songbirds
- **Cost**: 5
- **Category**: Physical
- **Effects**:
  - `signalRange: +0.4`
  - `harmony: +2`
  - Complex communication
  - Territory marking via song

### Parrot Mimicry
- **Inspiration**: Parrots, mynahs
- **Cost**: 6
- **Category**: Mental
- **Effects**:
  - `sociology: +2`
  - `deceptionBonus: +0.3`
  - Can learn enemy communications
  - `curiosity: +1`

### Flock Behavior
- **Inspiration**: Starlings, flamingos
- **Cost**: 5
- **Category**: Temperament
- **Effects**:
  - `harmony: +3`
  - `panicResistance: +0.2`
  - Predator confusion bonus
  - `moraleResistance: +0.15`

### Mobbing Behavior
- **Inspiration**: Crows, songbirds
- **Cost**: 4
- **Category**: Temperament
- **Effects**:
  - Group defense bonus
  - `allyBonus: +0.2`
  - `aggression: +1`
  - Small vs large bonus

---

## 5. Nesting & Reproduction Traits

### Elaborate Nest Builder
- **Inspiration**: Weaverbirds, bowerbirds
- **Cost**: 5
- **Category**: Physical
- **Effects**:
  - `buildingBonus: +0.3`
  - `craftingBonus: +0.15`
  - Offspring survival bonus +20%

### Brood Parasitism
- **Inspiration**: Cuckoos, cowbirds
- **Cost**: 4
- **Category**: Survival
- **Effects**:
  - Can use other species' nests
  - `deceptionBonus: +0.3`
  - `harmony: -3`
  - `piety: -2`
- **Excludes**: Elaborate Nest Builder

### Colonial Nesting
- **Inspiration**: Penguins, seabirds
- **Cost**: 4
- **Category**: Temperament
- **Effects**:
  - `harmony: +2`
  - `popCapMultiplier: 1.1`
  - `homeDefenseBonus: +0.15`
  - Coastal bonus +0.1

### Mound Builder
- **Inspiration**: Megapodes, malleefowl
- **Cost**: 5
- **Category**: Physical
- **Effects**:
  - Incubation via environmental heat
  - `buildingBonus: +0.2`
  - `starvationResistance: +0.1` (no incubation duty)

---

## 6. Specialized Bird Traits

### Woodpecker Adaptation
- **Inspiration**: Woodpeckers
- **Cost**: 5
- **Category**: Physical
- **Effects**:
  - Shock-absorbing skull
  - `foragingBonus: +0.2`
  - Forest bonus +0.15
  - `buildingBonus: +0.1`

### Wading Legs
- **Inspiration**: Herons, flamingos, storks
- **Cost**: 4
- **Category**: Physical
- **Effects**:
  - Shallow water movement bonus
  - `huntingSuccess: +0.15` (aquatic)
  - Swamp/coastal bonus +0.15

### Webbed Feet
- **Inspiration**: Ducks, pelicans, penguins
- **Cost**: 4
- **Category**: Physical
- **Effects**:
  - `swimSpeedMultiplier: 1.3`
  - `landSpeedMultiplier: 0.9`
  - Aquatic terrain bonus +0.15

### Crop Storage
- **Inspiration**: Pigeons, parrots
- **Cost**: 3
- **Category**: Physical
- **Effects**:
  - Food storage capability
  - `starvationResistance: +0.15`
  - Can feed young regurgitated food

### Pelican Pouch
- **Inspiration**: Pelicans
- **Cost**: 4
- **Category**: Physical
- **Effects**:
  - Mass food transport
  - `foragingBonus: +0.25`
  - `huntingSuccess: +0.1` (fish)

---

# PART V: MARINE LIFE TRAITS

## 1. Pressure & Depth Traits

### Deep Sea Adapted
- **Inspiration**: Anglerfish, giant squid
- **Cost**: 6
- **Category**: Physical
- **Effects**:
  - Extreme pressure tolerance
  - `darkVision: true`
  - `starvationResistance: +0.2`
  - Surface vulnerability
- **Requires**: Fully Aquatic

### Bioluminescence (Marine)
- **Inspiration**: Anglerfish, jellyfish, deep sea fish
- **Cost**: 5
- **Category**: Physical
- **Effects**:
  - `producesLight: true`
  - Lure capability
  - `huntingSuccess: +0.15` (dark environments)
  - Communication via light

### Pressure Bladder
- **Inspiration**: Cuttlefish, nautilus
- **Cost**: 4
- **Category**: Physical
- **Effects**:
  - Depth control
  - `swimSpeedMultiplier: 1.1`
  - Buoyancy management

---

## 2. Locomotion Traits

### Jet Propulsion
- **Inspiration**: Squid, octopus, jellyfish
- **Cost**: 6
- **Category**: Physical
- **Effects**:
  - `speedMultiplier: 1.4` (burst)
  - Escape mechanism
  - `panicResistance: +0.15`

### Undulating Fins
- **Inspiration**: Rays, cuttlefish, seahorses
- **Cost**: 4
- **Category**: Physical
- **Effects**:
  - `swimSpeedMultiplier: 1.1`
  - Precise maneuvering
  - Ambush capability +15%

### Powerful Tail
- **Inspiration**: Sharks, tuna, dolphins
- **Cost**: 5
- **Category**: Physical
- **Effects**:
  - `swimSpeedMultiplier: 1.3`
  - `huntingSuccess: +0.1`
  - Sustained speed

### Bottom Crawler
- **Inspiration**: Crabs, lobsters, starfish
- **Cost**: 3
- **Category**: Physical
- **Effects**:
  - Seafloor traversal
  - `swimSpeedMultiplier: 0.8`
  - `foragingBonus: +0.15`
  - Scavenger bonus

---

## 3. Offensive Traits

### Tentacle Grasp
- **Inspiration**: Octopus, squid
- **Cost**: 6
- **Category**: Physical
- **Effects**:
  - `grappleBonus: +0.35`
  - `toolEffectiveness: 1.15`
  - Multi-target capability

### Electric Shock
- **Inspiration**: Electric eels, torpedo rays
- **Cost**: 8
- **Category**: Physical
- **Effects**:
  - Ranged stun attack
  - `damageMultiplier: 1.2`
  - Area effect capability
  - `huntingSuccess: +0.2`

### Shark Bite
- **Inspiration**: Great white, tiger sharks
- **Cost**: 7
- **Category**: Physical
- **Effects**:
  - `damageMultiplier: 1.4`
  - Serrated teeth bleeding effect
  - `huntingSuccess: +0.2`

### Venomous Spine
- **Inspiration**: Lionfish, stonefish, stingrays
- **Cost**: 6
- **Category**: Physical
- **Effects**:
  - `poisonDamage: 0.3`
  - Defensive capability
  - `panicResistance: +0.2`

### Harpoon Strike
- **Inspiration**: Mantis shrimp, cone snails
- **Cost**: 7
- **Category**: Physical
- **Effects**:
  - `damageMultiplier: 1.35`
  - First strike bonus +40%
  - Armor-piercing capability

---

## 4. Defensive Traits

### Ink Cloud
- **Inspiration**: Octopus, squid, cuttlefish
- **Cost**: 5
- **Category**: Physical
- **Effects**:
  - Escape bonus +40%
  - `panicResistance: +0.15`
  - Vision obscurement (area)

### Spiny Defense
- **Inspiration**: Sea urchins, pufferfish
- **Cost**: 5
- **Category**: Physical
- **Effects**:
  - Contact damage to attackers
  - `panicResistance: +0.2`
  - `speedMultiplier: 0.9`

### Inflation Defense
- **Inspiration**: Pufferfish
- **Cost**: 4
- **Category**: Physical
- **Effects**:
  - Size increase when threatened
  - Predator deterrence
  - `panicResistance: +0.25`

### Shell Retreat
- **Inspiration**: Hermit crabs, clams
- **Cost**: 5
- **Category**: Physical
- **Effects**:
  - `hpMultiplier: 1.3` (when retreated)
  - `speedMultiplier: 0.7`
  - Full defensive posture available

### Camouflage (Cephalopod)
- **Inspiration**: Octopus, cuttlefish
- **Cost**: 8
- **Category**: Physical
- **Effects**:
  - Active camouflage
  - Ambush bonus +40%
  - `stealthDetection: -0.3` (vs self)
  - `deceptionBonus: +0.2`

---

## 5. Regeneration & Survival Traits

### Starfish Regeneration
- **Inspiration**: Starfish, sea cucumbers
- **Cost**: 9
- **Category**: Physical
- **Effects**:
  - `hpRegenRate: +0.4`
  - Limb regrowth
  - Potential cloning from fragments
  - `speedMultiplier: 0.8`

### Desiccation Tolerance (Marine)
- **Inspiration**: Intertidal creatures
- **Cost**: 4
- **Category**: Survival
- **Effects**:
  - Survives out of water temporarily
  - Tidal zone bonus +0.2
  - `adaptability: +0.1`

### Coral Symbiosis
- **Inspiration**: Clownfish, coral crabs
- **Cost**: 4
- **Category**: Survival
- **Effects**:
  - `homeDefenseBonus: +0.25`
  - `starvationResistance: +0.1`
  - Requires reef terrain

---

## 6. Sensory Traits

### Lateral Line System
- **Inspiration**: Fish, sharks
- **Cost**: 5
- **Category**: Physical
- **Effects**:
  - `detectionRadius: +0.25`
  - Water vibration sensing
  - `stealthDetection: true` (movement)
  - `huntingSuccess: +0.1`

### Electroreception (Marine)
- **Inspiration**: Sharks, rays
- **Cost**: 7
- **Category**: Physical
- **Effects**:
  - `detectionRadius: +0.3`
  - Hidden prey detection
  - `huntingSuccess: +0.2`
  - Magnetic navigation

### Shark Smell
- **Inspiration**: Great white sharks
- **Cost**: 5
- **Category**: Physical
- **Effects**:
  - `trackingBonus: +0.35`
  - Blood detection extreme range
  - `huntingSuccess: +0.15`

---

## 7. Specialized Marine Traits

### Filter Feeding
- **Inspiration**: Whales, manta rays, whale sharks
- **Cost**: 5
- **Category**: Physical
- **Effects**:
  - `foragingBonus: +0.3`
  - No hunting required
  - `aggression: -3`
  - `biomassPerSprite: 0.8`
- **Excludes**: Predator diet

### Cleaner Symbiosis
- **Inspiration**: Cleaner wrasse, cleaner shrimp
- **Cost**: 4
- **Category**: Survival
- **Effects**:
  - Immunity from larger predators
  - `harmony: +2`
  - `piety: +1`
  - Resource sharing capability

### Schooling Behavior
- **Inspiration**: Sardines, herring, tuna
- **Cost**: 5
- **Category**: Temperament
- **Effects**:
  - `harmony: +3`
  - Predator confusion
  - `popCapMultiplier: 1.2`
  - `panicResistance: +0.2`

### Anadromous
- **Inspiration**: Salmon, sturgeon
- **Cost**: 4
- **Category**: Physical
- **Effects**:
  - Freshwater and saltwater capability
  - `adaptability: +0.2`
  - Spawning migration bonus
  - `starvationResistance: +0.1`

---

# PART VI: PLANT-INSPIRED TRAITS

## 1. Energy Acquisition Traits

### Photosynthetic Skin
- **Inspiration**: Plants, some sea slugs
- **Cost**: 7
- **Category**: Physical
- **Effects**:
  - Passive food generation in sunlight
  - `starvationResistance: +0.4`
  - `speedMultiplier: 0.9` (basking time)
  - `biomassPerSprite: 0.7`

### Chemosynthetic
- **Inspiration**: Deep sea vent organisms
- **Cost**: 6
- **Category**: Physical
- **Effects**:
  - Food from volcanic/chemical sources
  - `volcanicBonus: +0.3`
  - Underground bonus +0.2
  - No sunlight required

### Carnivorous Adaptation (Plant-like)
- **Inspiration**: Venus flytraps, sundews, pitcher plants
- **Cost**: 6
- **Category**: Physical
- **Effects**:
  - Trap-based hunting
  - `huntingSuccess: +0.2` (passive)
  - `speedMultiplier: 0.7`
  - Ambush bonus +50%

---

## 2. Chemical Defense Traits

### Toxic Secretion
- **Inspiration**: Poison ivy, manchineel tree
- **Cost**: 5
- **Category**: Physical
- **Effects**:
  - Contact damage to attackers
  - `panicResistance: +0.2`
  - `harmony: -1`

### Thorny Defense
- **Inspiration**: Cacti, roses, acacia
- **Cost**: 4
- **Category**: Physical
- **Effects**:
  - `hpMultiplier: 1.1`
  - Contact damage
  - Grazer deterrence

### Narcotic Compounds
- **Inspiration**: Poppies, coca, datura
- **Cost**: 5
- **Category**: Physical
- **Effects**:
  - `deceptionBonus: +0.2`
  - Prey confusion effect
  - `sociology: +1`
  - Potential trade resource

### Allelopathy
- **Inspiration**: Black walnut, eucalyptus
- **Cost**: 4
- **Category**: Survival
- **Effects**:
  - Territory control via chemistry
  - `claimResistance: +0.2`
  - Enemy spawn suppression

---

## 3. Dispersal & Reproduction Traits

### Spore Dispersal
- **Inspiration**: Fungi, ferns, mosses
- **Cost**: 5
- **Category**: Physical
- **Effects**:
  - `spawnRateMultiplier: 1.3`
  - Long-range reproduction
  - `popCapMultiplier: 1.1`
  - Airborne spread

### Seed Caching Symbiosis
- **Inspiration**: Oaks/squirrels, pines/jays
- **Cost**: 4
- **Category**: Survival
- **Effects**:
  - `harmony: +1`
  - Spread via other creatures
  - `starvationResistance: +0.1`

### Rhizome Network
- **Inspiration**: Bamboo, aspen, grass
- **Cost**: 6
- **Category**: Physical
- **Effects**:
  - Underground expansion
  - `claimRateMultiplier: 1.2`
  - Shared resource pool
  - `harmony: +2`

### Explosive Seed Dispersal
- **Inspiration**: Touch-me-nots, sandbox tree
- **Cost**: 4
- **Category**: Physical
- **Effects**:
  - Rapid territory spread
  - `claimRateMultiplier: 1.15`
  - Self-defense mechanism

---

## 4. Environmental Adaptation Traits

### Fire Adaptation
- **Inspiration**: Eucalyptus, sequoias, fireweed
- **Cost**: 5
- **Category**: Survival
- **Effects**:
  - `heatResistance: true`
  - Fire survival
  - Post-fire bonus +30%
  - Volcanic terrain bonus +0.15

### Drought Resistance
- **Inspiration**: Cacti, succulents
- **Cost**: 5
- **Category**: Survival
- **Effects**:
  - `starvationResistance: +0.35`
  - Desert bonus +0.25
  - `speedMultiplier: 0.9`
  - Water storage capability

### Epiphytic
- **Inspiration**: Orchids, bromeliads, Spanish moss
- **Cost**: 4
- **Category**: Survival
- **Effects**:
  - Forest bonus +0.2
  - Vertical space utilization
  - `terrainCostMultiplier: 0.85` (forest)

### Aquatic Plant Adaptation
- **Inspiration**: Water lilies, mangroves, kelp
- **Cost**: 5
- **Category**: Physical
- **Effects**:
  - `waterBreathing: true`
  - Swamp/coastal bonus +0.2
  - Oxygen production bonus

---

## 5. Symbiosis Traits

### Nitrogen Fixation
- **Inspiration**: Legumes, alder trees
- **Cost**: 5
- **Category**: Survival
- **Effects**:
  - `foragingBonus: +0.2`
  - Terrain improvement over time
  - `harmony: +1`

### Mycorrhizal Network
- **Inspiration**: Forest trees/fungi partnerships
- **Cost**: 7
- **Category**: Survival
- **Effects**:
  - Resource sharing with allies
  - `signalRange: +0.3`
  - `harmony: +2`
  - Forest bonus +0.15

### Pollinator Attraction
- **Inspiration**: Flowering plants
- **Cost**: 4
- **Category**: Survival
- **Effects**:
  - Insect ally potential
  - `spawnRateMultiplier: 1.1`
  - `harmony: +1`

---

## 6. Structural Traits

### Woody Reinforcement
- **Inspiration**: Trees
- **Cost**: 5
- **Category**: Physical
- **Effects**:
  - `hpMultiplier: 1.25`
  - `speedMultiplier: 0.8`
  - Longevity bonus

### Flexible Stems
- **Inspiration**: Grasses, bamboo, willows
- **Cost**: 3
- **Category**: Physical
- **Effects**:
  - Wind/storm resistance
  - `panicResistance: +0.15`
  - `speedMultiplier: 1.05`

### Hollow Structure
- **Inspiration**: Bamboo, some trees
- **Cost**: 3
- **Category**: Physical
- **Effects**:
  - `biomassPerSprite: 0.85`
  - `speedMultiplier: 1.05`
  - Resource efficiency

---

# PART VII: FUNGAL & MICROBIAL TRAITS

## 1. Mycelial Traits

### Mycelial Network
- **Inspiration**: Fungi underground networks
- **Cost**: 8
- **Category**: Physical
- **Effects**:
  - Underground communication
  - `signalRange: +0.5`
  - `claimRateMultiplier: 1.25`
  - `detectionRadius: +0.2`

### Decomposer
- **Inspiration**: Saprophytic fungi
- **Cost**: 5
- **Category**: Survival
- **Effects**:
  - `foragingBonus: +0.3`
  - Corpse/waste utilization
  - `starvationResistance: +0.2`
  - Battlefield advantage

### Parasitic Infection
- **Inspiration**: Cordyceps, athlete's foot
- **Cost**: 6
- **Category**: Survival
- **Effects**:
  - Can weaken enemies over time
  - `aggression: +2`
  - `harmony: -3`
  - `diseaseResistance: +0.2` (self)

### Symbiotic Mutualism
- **Inspiration**: Lichens, gut bacteria
- **Cost**: 5
- **Category**: Survival
- **Effects**:
  - Bonus when allied
  - `harmony: +3`
  - `starvationResistance: +0.15`
  - `diseaseResistance: +0.1`

---

## 2. Spore & Reproduction Traits

### Massive Spore Production
- **Inspiration**: Puffballs, bracket fungi
- **Cost**: 5
- **Category**: Physical
- **Effects**:
  - `spawnRateMultiplier: 1.4`
  - Long-range dispersal
  - `popCapMultiplier: 1.15`
  - Individual frailty

### Spore Dormancy
- **Inspiration**: Anthrax, various fungi
- **Cost**: 4
- **Category**: Survival
- **Effects**:
  - Extreme survival capability
  - `starvationResistance: +0.5`
  - Can survive catastrophic events
  - Slow reactivation

### Fruiting Body
- **Inspiration**: Mushrooms
- **Cost**: 3
- **Category**: Physical
- **Effects**:
  - Visible reproduction phase
  - `spawnRateMultiplier: 1.2` (seasonal)
  - Vulnerability during fruiting

---

## 3. Chemical Traits

### Antibiotic Production
- **Inspiration**: Penicillium, various bacteria
- **Cost**: 6
- **Category**: Physical
- **Effects**:
  - `diseaseResistance: +0.3`
  - Enemy disease effect
  - Territory control chemical

### Toxin Production (Fungal)
- **Inspiration**: Death cap, destroying angel
- **Cost**: 7
- **Category**: Physical
- **Effects**:
  - `poisonDamage: 0.35`
  - Delayed but severe effect
  - Predator deterrence extreme

### Psychoactive Compounds
- **Inspiration**: Psilocybin mushrooms, ergot
- **Cost**: 5
- **Category**: Physical
- **Effects**:
  - `piety: +2`
  - `deceptionBonus: +0.2`
  - Target confusion effect
  - Trade resource potential

### Bioluminescence (Fungal)
- **Inspiration**: Foxfire, honey fungus
- **Cost**: 4
- **Category**: Physical
- **Effects**:
  - `producesLight: true`
  - `caveBonus: +0.1`
  - Spore attraction mechanism

---

## 4. Extremophile Traits

### Thermophilic
- **Inspiration**: Hot spring bacteria, deep sea vent organisms
- **Cost**: 6
- **Category**: Survival
- **Effects**:
  - `heatResistance: true`
  - Volcanic bonus +0.3
  - Cold vulnerability
  - `volcanicBonus: +0.25`

### Cryophilic
- **Inspiration**: Ice algae, permafrost bacteria
- **Cost**: 6
- **Category**: Survival
- **Effects**:
  - `coldResistance: true`
  - Tundra bonus +0.3
  - Heat vulnerability
  - `tundraBonus: +0.25`

### Halophilic
- **Inspiration**: Salt-loving bacteria, brine shrimp
- **Cost**: 4
- **Category**: Survival
- **Effects**:
  - Salt water/environment tolerance
  - Coastal bonus +0.2
  - Desert salt flat bonus +0.15

### Radiation Resistant
- **Inspiration**: Deinococcus radiodurans
- **Cost**: 5
- **Category**: Survival
- **Effects**:
  - `diseaseResistance: +0.2`
  - Extreme environment survival
  - `hpRegenRate: +0.1`
  - Post-catastrophe bonus

### Acidophilic
- **Inspiration**: Mine drainage bacteria
- **Cost**: 4
- **Category**: Survival
- **Effects**:
  - Toxic environment tolerance
  - `diseaseResistance: +0.15`
  - Volcanic/swamp bonus +0.15

---

## 5. Collective Behavior Traits

### Quorum Sensing
- **Inspiration**: Bacterial communication
- **Cost**: 5
- **Category**: Mental
- **Effects**:
  - `harmony: +2`
  - Population-based bonuses
  - Coordinated behavior triggers
  - `signalRange: +0.2`

### Biofilm Formation
- **Inspiration**: Bacterial colonies
- **Cost**: 5
- **Category**: Physical
- **Effects**:
  - `homeDefenseBonus: +0.3`
  - `diseaseResistance: +0.2`
  - Collective protection
  - `claimResistance: +0.15`

### Horizontal Gene Transfer
- **Inspiration**: Bacterial conjugation
- **Cost**: 7
- **Category**: Mental
- **Effects**:
  - `adaptability: +0.3`
  - Trait acquisition from others
  - `curiosity: +2`
  - Evolution acceleration

---

## 6. Specialized Microbial Traits

### Rapid Reproduction
- **Inspiration**: Bacterial binary fission
- **Cost**: 6
- **Category**: Physical
- **Effects**:
  - `spawnRateMultiplier: 1.6`
  - `popCapMultiplier: 1.3`
  - Short lifespan
  - Individual HP severely reduced
- **Size Requirement**: Diminutive

### Slime Trail
- **Inspiration**: Slime molds, slugs
- **Cost**: 3
- **Category**: Physical
- **Effects**:
  - Territory marking
  - `trackingBonus: +0.1`
  - Path optimization
  - `speedMultiplier: 1.05` (on trails)

### Encystment
- **Inspiration**: Protozoans, slime molds
- **Cost**: 4
- **Category**: Survival
- **Effects**:
  - Extreme survival dormant form
  - `starvationResistance: +0.4`
  - Complete environmental protection
  - Slow reactivation

### Predatory Microbe
- **Inspiration**: Amoeba, Bdellovibrio
- **Cost**: 5
- **Category**: Temperament
- **Effects**:
  - `huntingSuccess: +0.2`
  - `aggression: +2`
  - Engulfment attack
  - Size advantage vs smaller

---

# PART VIII: HYBRID & UNIQUE TRAITS

## 1. Convergent Evolution Traits

### Echolocating Hunter
- **Inspiration**: Bats AND dolphins (convergent)
- **Cost**: 8
- **Category**: Physical
- **Effects**:
  - `darkVision: true`
  - `detectionRadius: +0.35`
  - `stealthDetection: true`
  - Works in air OR water

### Powered Burrower
- **Inspiration**: Moles, mole crickets, naked mole rats
- **Cost**: 7
- **Category**: Physical
- **Effects**:
  - `burrowEnabled: true`
  - Rapid tunnel creation
  - Underground terrain mastery
  - `caveBonus: +0.2`

### Gliding Membrane
- **Inspiration**: Flying squirrels, sugar gliders, flying fish, Draco lizards
- **Cost**: 5
- **Category**: Physical
- **Effects**:
  - Extended jump/fall distance
  - `speedMultiplier: 1.1`
  - Forest canopy traversal
  - Not true flight

### Electric Sense
- **Inspiration**: Platypus, sharks, electric eels (convergent)
- **Cost**: 7
- **Category**: Physical
- **Effects**:
  - `detectionRadius: +0.3`
  - `stealthDetection: true`
  - Works in water or dark
  - Prey detection +25%

---

## 2. Exotic Combination Traits

### Venomous Mammal
- **Inspiration**: Platypus, shrews, slow loris
- **Cost**: 6
- **Category**: Physical
- **Effects**:
  - `poisonDamage: 0.2`
  - Defensive use primary
  - `panicResistance: +0.15`
  - Rare mammal adaptation

### Flying Predator
- **Inspiration**: Eagles, bats, dragonflies
- **Cost**: 12
- **Category**: Physical
- **Effects**:
  - `flightEnabled: true`
  - `huntingSuccess: +0.25`
  - `speedMultiplier: 1.3`
  - Aerial hunting capability
- **Requires**: Powered Flight or equivalent, Predator diet

### Aquatic Ambusher
- **Inspiration**: Crocodiles, frogfish, mantis shrimp
- **Cost**: 8
- **Category**: Physical
- **Effects**:
  - Ambush bonus +45%
  - `swimSpeedMultiplier: 1.2`
  - `starvationResistance: +0.2`
  - Patience-based hunting

### Armored Speed
- **Inspiration**: Armadillos (rolling), pangolins
- **Cost**: 8
- **Category**: Physical
- **Effects**:
  - `hpMultiplier: 1.25`
  - `speedMultiplier: 1.0` (no penalty)
  - Ball defense option
  - Rare combination

---

## 3. Unique Ability Traits

### Tool Mastery
- **Inspiration**: Primates, corvids, octopuses
- **Cost**: 10
- **Category**: Mental
- **Effects**:
  - `toolEffectiveness: 1.5`
  - `craftingBonus: +0.3`
  - `curiosity: +2`
  - `logos: +2`

### Mirror Self-Recognition
- **Inspiration**: Great apes, dolphins, elephants, magpies
- **Cost**: 6
- **Category**: Mental
- **Effects**:
  - `curiosity: +2`
  - `sociology: +2`
  - `deceptionBonus: +0.15`
  - Self-awareness indicator

### Death Awareness
- **Inspiration**: Elephants, corvids, cetaceans
- **Cost**: 5
- **Category**: Mental
- **Effects**:
  - `piety: +2`
  - `moraleResistance: +0.2`
  - Funeral behaviors
  - `sociology: +1`

### Teaching Behavior
- **Inspiration**: Meerkats, orcas, cheetahs
- **Cost**: 6
- **Category**: Mental
- **Effects**:
  - Youth phase accelerated
  - `elderBonus: +0.2`
  - Skill transfer bonus
  - `sociology: +2`

### Play Behavior
- **Inspiration**: Mammals, corvids, octopuses
- **Cost**: 4
- **Category**: Mental
- **Effects**:
  - `curiosity: +2`
  - Youth survival bonus
  - `adaptability: +0.1`
  - Social bonding

### Cultural Transmission
- **Inspiration**: Cetaceans, primates, corvids
- **Cost**: 8
- **Category**: Mental
- **Effects**:
  - Regional behavior variations
  - `sociology: +3`
  - Innovation potential
  - Tradition preservation

---

# APPENDIX: TRAIT COMPATIBILITY MATRIX

## Size-Based Restrictions

| Trait | Diminutive | Small | Middling | Huge | Behemoth |
|-------|------------|-------|----------|------|----------|
| Insect Flight | Yes | Yes | No | No | No |
| Powered Flight | Yes | Yes | Yes | No | No |
| Soaring Flight | No | Yes | Yes | Yes | No |
| Eusocial Hive | Yes | Yes | No | No | No |
| Trunk/Proboscis | No | No | No | Yes | Yes |
| Rapid Reproduction | Yes | No | No | No | No |
| Prolific Breeder | Yes | Yes | No | No | No |

## Mutual Exclusions

| Trait A | Excludes |
|---------|----------|
| Pack Hunter | Solitary Hunter, Ambush Predator |
| Solitary Hunter | Pack Hunter, Hive Mind |
| Thick Fur | Bare Skin, Aquatic Mammal |
| Bare Skin | Thick Fur, Armored Hide |
| Cold-Blooded | High Metabolism |
| Powered Flight | Flightless |
| Constrictor | Venomous Bite |
| Filter Feeding | Predator diet |
| Eusocial Hive | All individualist traits |

## Synergy Combinations

| Trait A | Synergizes With | Bonus |
|---------|-----------------|-------|
| Pack Hunter | Flock Behavior | +10% ally bonus |
| Echolocation | Cave Dweller | +15% detection |
| Venomous Bite | Ambush Predator | +20% hunt success |
| Web Builder | Trapdoor Ambush | +25% ambush |
| Mycelial Network | Symbiotic Mutualism | +20% harmony |
| Corvid Intelligence | Tool Mastery | +15% crafting |
| Bioluminescence | Deep Sea Adapted | +20% hunting |

---

# INDEX BY EFFECT TYPE

## Movement Modifiers
- Quadrupedal Sprinter (+40% speed)
- Powered Flight (+40% speed, terrain cost -60%)
- Saltatorial (+20% speed)
- Jet Propulsion (+40% burst speed)
- Pursuit Predator (+50% pursuit speed)

## Combat Modifiers
- Shark Bite (+40% damage)
- Harpoon Strike (+35% damage)
- Mantis Strike (+25% damage, +50% first strike)
- Raptor Talons (+25% damage, +30% grapple)
- Electric Shock (+20% damage, stun)

## Survival Modifiers
- Spore Dormancy (+50% starvation resistance)
- Hibernation (+40% starvation resistance)
- Photosynthetic Skin (+40% starvation resistance)
- Encystment (+40% starvation resistance)
- Drought Resistance (+35% starvation resistance)

## Population Modifiers
- Eusocial Hive (+100% pop cap, +50% spawn)
- Rapid Reproduction (+60% spawn, +30% pop cap)
- Prolific Breeder (+40% spawn, +20% pop cap)
- Massive Spore Production (+40% spawn, +15% pop cap)
- Schooling Behavior (+20% pop cap)

## Territory Modifiers
- Mycelial Network (+25% claim rate, +20% detection)
- Rhizome Network (+20% claim rate)
- Allelopathy (+20% claim resistance)
- Biofilm Formation (+30% home defense, +15% claim resistance)

---

*This encyclopedia serves as a comprehensive reference for species creation in DEITY. Traits should be selected to create cohesive, thematically consistent species while maintaining game balance through the creation point system.*
