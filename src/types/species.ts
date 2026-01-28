/**
 * DEITY: Species Creation Type Definitions
 *
 * These types define the data structures for the Genesis (Species Creation) stage.
 * Players select traits which feed into hidden derived stats that the game engine uses.
 */

// =============================================================================
// Core Enums and Constants
// =============================================================================

export type SizeCategory = 'diminutive' | 'small' | 'middling' | 'huge' | 'behemoth';
export type LongevityTier = 1 | 2 | 3 | 4 | 5;
export type DietType = 'omnivore' | 'predator' | 'herbivore';
export type TraitCategory = 'physical' | 'temperament' | 'mental' | 'survival';

export type TerrainType =
  | 'plains'
  | 'forest'
  | 'jungle'
  | 'mountains'
  | 'desert'
  | 'tundra'
  | 'swamp'
  | 'volcanic'
  | 'coastal'
  | 'underground';

export type TerrainDesirability = 'high' | 'medium' | 'low' | 'very_low';

// Life phases for notables
export type LifePhase = 'novice' | 'blooded' | 'veteran' | 'elder' | 'legendary';

// =============================================================================
// Hidden Stat Types (Derived from Traits)
// =============================================================================

/**
 * Hidden stats derived from trait selections.
 * These are calculated, not directly chosen by the player.
 */
export interface DerivedStats {
  /** Collectivity vs Individualism (-10 to +10) */
  harmony: number;

  /** Combat tendency (-10 to +10) */
  aggression: number;

  /** Base intelligence / learning rate (1-10) */
  curiosity: number;

  /** Faith generation and divine responsiveness (1-10) */
  piety: number;

  /** Nature/biology intelligence subcategory (1-10) */
  naturalism: number;

  /** Math/engineering intelligence subcategory (1-10) */
  logos: number;

  /** Social/political intelligence subcategory (1-10) */
  sociology: number;
}

/**
 * Stat modifiers that traits can apply to hidden stats.
 */
export interface StatModifiers {
  harmony?: number;
  aggression?: number;
  curiosity?: number;
  piety?: number;
  naturalism?: number;
  logos?: number;
  sociology?: number;
}

// =============================================================================
// Modifier Types (Applied to Gameplay)
// =============================================================================

/**
 * Gameplay modifiers derived from size, traits, and other selections.
 * These are the actual numbers the game engine uses.
 */
export interface GameplayModifiers {
  // Combat
  hpMultiplier: number;
  damageMultiplier: number;

  // Movement
  speedMultiplier: number;
  terrainCostMultiplier?: number;
  swimSpeedMultiplier?: number;
  landSpeedMultiplier?: number;

  // Population
  spawnRateMultiplier: number;
  popCapMultiplier: number;
  biomassPerSprite: number;

  // Territory
  claimRateMultiplier: number;
  claimResistance?: number;
  homeDefenseBonus?: number;
  roamingPenalty?: number;
  territoryAttachment?: number;

  // Crafting & Tools
  craftingBonus: number;
  toolEffectiveness: number;
  buildingBonus?: number;

  // Sensing
  visionRange: number;
  detectionRadius?: number;
  threatDetection?: number;
  trackingBonus?: number;
  signalRange?: number;

  // Survival
  diseaseResistance?: number;
  starvationResistance?: number;
  hpRegenRate?: number;
  moraleResistance?: number;
  panicResistance?: number;

  // Combat special
  poisonDamage?: number;
  grappleBonus?: number;

  // Misc
  huntingSuccess?: number;
  foragingBonus?: number;
  settlementBonus?: number;
  elderBonus?: number;
  soloBonus?: number;
  allyBonus?: number;
  foreignerPenalty?: number;
  favoredTerrainBonus?: number;
  unfavoredTerrainPenalty?: number;
  adaptability?: number;
  planningBonus?: number;
  deceptionBonus?: number;
  moraleVariance?: number;
}

/**
 * Special abilities/flags that traits can grant.
 */
export interface SpecialAbilities {
  flightEnabled?: boolean;
  burrowEnabled?: boolean;
  waterBreathing?: boolean;
  stealthDetection?: boolean;
  darkVision?: boolean;
  producesLight?: boolean;
  heatResistance?: boolean;
  coldResistance?: boolean;
  caveBonus?: number;
  volcanicBonus?: number;
  tundraBonus?: number;
}

// =============================================================================
// Trait Definition Types
// =============================================================================

/**
 * Definition of a single selectable trait.
 */
export interface TraitDefinition {
  id: string;
  name: string;
  description: string;
  category: TraitCategory;

  /** Creation point cost (can be negative to give points back) */
  cost: number;

  /** Traits that must be selected first */
  requires?: string[];

  /** Traits that cannot be selected together */
  excludes?: string[];

  /** Size requirements for this trait */
  sizeRequirement?: SizeCategory[];

  /** Effects on hidden derived stats */
  statModifiers?: StatModifiers;

  /** Effects on gameplay modifiers */
  modifierEffects?: Partial<GameplayModifiers>;

  /** Special abilities granted */
  special?: SpecialAbilities;
}

/**
 * Collection of all trait definitions organized by category.
 */
export interface TraitCollection {
  physical: Record<string, TraitDefinition>;
  temperament: Record<string, TraitDefinition>;
  mental: Record<string, TraitDefinition>;
  survival: Record<string, TraitDefinition>;
}

// =============================================================================
// Size Category Types
// =============================================================================

/**
 * Definition of a size category.
 */
export interface SizeCategoryDefinition {
  id: SizeCategory;
  name: string;
  description: string;
  reference: string;
  cost: number;
  modifiers: {
    hpMultiplier: number;
    damageMultiplier: number;
    spawnRateMultiplier: number;
    popCapMultiplier: number;
    biomassPerSprite: number;
  };
}

// =============================================================================
// Longevity Types
// =============================================================================

/**
 * Definition of a longevity tier.
 */
export interface LongevityTierDefinition {
  id: string;
  name: string;
  description: string;
  /** Ticks required to advance one life phase */
  ticksPerPhase: number;
  /** Maximum number of life phases achievable */
  maxPhases: number;
  cost: number;
}

// =============================================================================
// Diet Types
// =============================================================================

/**
 * Diet mechanics configuration.
 */
export interface DietMechanics {
  /** Multiplier for biomass gained from claimed territory */
  biomassFromTerritory: number;
  /** Multiplier for biomass gained from kills */
  biomassFromKills: number;
  /** Whether hunting is required to avoid starvation */
  huntingRequired: boolean;
  /** Rate at which meat store decays (predators only) */
  meatDecayRate?: number;
  /** Meat threshold below which starvation begins */
  starvationThreshold?: number;
}

/**
 * Definition of a diet type.
 */
export interface DietTypeDefinition {
  id: DietType;
  name: string;
  description: string;
  cost: number;
  mechanics: DietMechanics;
  modifiers?: Partial<GameplayModifiers>;
  statModifiers?: StatModifiers;
}

// =============================================================================
// Terrain Types
// =============================================================================

/**
 * Definition of a favored terrain option.
 */
export interface FavoredTerrainDefinition {
  id: TerrainType;
  name: string;
  description: string;
  desirability: TerrainDesirability;
  /** Strength of bonuses when in this terrain (higher for less desirable) */
  bonusStrength: number;
}

// =============================================================================
// Species Definition (Final Output)
// =============================================================================

/**
 * Complete species definition created during Genesis.
 * This is the output of the creation process and is locked forever after DEPLOY.
 */
export interface SpeciesDefinition {
  /** Unique identifier */
  id: string;

  /** Player-chosen name */
  name: string;

  /** Timestamp of creation */
  createdAt: number;

  // Core Selections
  size: SizeCategory;
  longevity: LongevityTier;
  diet: DietType;
  favoredTerrain: TerrainType;

  /** List of selected trait IDs */
  traits: string[];

  /** Creation points spent */
  pointsSpent: number;

  /** Derived hidden stats (calculated from traits) */
  derivedStats: DerivedStats;

  /** Final gameplay modifiers (calculated from all selections) */
  modifiers: GameplayModifiers;

  /** Special abilities (aggregated from traits) */
  specialAbilities: SpecialAbilities;
}

// =============================================================================
// Creation State Types
// =============================================================================

/**
 * Validation result for species creation.
 */
export interface ValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
}

/**
 * State of the creation process (for UI).
 */
export interface CreationState {
  /** Current species name */
  name: string;

  /** Selected size */
  size: SizeCategory | null;

  /** Selected longevity tier */
  longevity: LongevityTier | null;

  /** Selected diet */
  diet: DietType | null;

  /** Selected favored terrain */
  favoredTerrain: TerrainType | null;

  /** Currently selected traits */
  selectedTraits: string[];

  /** Total creation points available */
  totalPoints: number;

  /** Points currently spent */
  pointsSpent: number;

  /** Points remaining */
  pointsRemaining: number;

  /** Current validation state */
  validation: ValidationResult;

  /** Preview of derived stats */
  previewStats: DerivedStats;

  /** Preview of modifiers */
  previewModifiers: GameplayModifiers;
}

// =============================================================================
// Notable (Individual Character) Types
// =============================================================================

/**
 * A Notable is an individual character within a sprite's roster.
 * Notables have their own stats, classes, and progression.
 */
export interface Notable {
  id: string;
  name: string;

  /** Current life phase */
  phase: LifePhase;

  /** Ticks survived in current phase */
  phaseProgress: number;

  /** Total ticks alive */
  age: number;

  /** Experience points accumulated */
  experience: number;

  /** Authority stat (determines leadership position) */
  authority: number;

  /** Current class (emerges from traits + experience) */
  class: string | null;

  /** Traits accumulated through experience */
  acquiredTraits: string[];

  /** Negative traits from youth (removed at Blooded phase) */
  youthTraits: string[];

  /** Position in roster (0 = leader, 1-2 = advisors) */
  rosterPosition: 0 | 1 | 2;
}

/**
 * The roster of a sprite - always exactly 3 notables.
 */
export type SpriteRoster = [Notable, Notable, Notable];

// =============================================================================
// Export all types
// =============================================================================

export type {
  SizeCategory,
  LongevityTier,
  DietType,
  TraitCategory,
  TerrainType,
  TerrainDesirability,
  LifePhase,
};
