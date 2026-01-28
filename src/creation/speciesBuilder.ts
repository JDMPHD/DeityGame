/**
 * DEITY: Species Builder
 *
 * Utility functions for building a species definition from player selections.
 * Handles trait validation, stat derivation, and modifier calculation.
 */

import type {
  SpeciesDefinition,
  CreationState,
  DerivedStats,
  GameplayModifiers,
  SpecialAbilities,
  ValidationResult,
  TraitDefinition,
  SizeCategory,
  LongevityTier,
  DietType,
  TerrainType,
  StatModifiers,
} from '../types/species';

// =============================================================================
// Default Values
// =============================================================================

const DEFAULT_CREATION_POINTS = 60;

const DEFAULT_DERIVED_STATS: DerivedStats = {
  harmony: 0,
  aggression: 0,
  curiosity: 5,
  piety: 5,
  naturalism: 5,
  logos: 5,
  sociology: 5,
};

const DEFAULT_GAMEPLAY_MODIFIERS: GameplayModifiers = {
  hpMultiplier: 1.0,
  damageMultiplier: 1.0,
  speedMultiplier: 1.0,
  spawnRateMultiplier: 1.0,
  popCapMultiplier: 1.0,
  biomassPerSprite: 1.0,
  claimRateMultiplier: 1.0,
  craftingBonus: 1.0,
  toolEffectiveness: 1.0,
  visionRange: 1.0,
};

// =============================================================================
// Stat Derivation
// =============================================================================

/**
 * Calculate derived stats from selected traits.
 * Traits add/subtract from base values.
 */
export function calculateDerivedStats(
  traits: TraitDefinition[],
  diet: DietType | null,
  dietDefinitions: Record<string, { statModifiers?: StatModifiers }>
): DerivedStats {
  const stats = { ...DEFAULT_DERIVED_STATS };

  // Apply trait stat modifiers
  for (const trait of traits) {
    if (trait.statModifiers) {
      applyStatModifiers(stats, trait.statModifiers);
    }
  }

  // Apply diet stat modifiers
  if (diet && dietDefinitions[diet]?.statModifiers) {
    applyStatModifiers(stats, dietDefinitions[diet].statModifiers!);
  }

  // Clamp values to valid ranges
  stats.harmony = clamp(stats.harmony, -10, 10);
  stats.aggression = clamp(stats.aggression, -10, 10);
  stats.curiosity = clamp(stats.curiosity, 1, 10);
  stats.piety = clamp(stats.piety, 1, 10);
  stats.naturalism = clamp(stats.naturalism, 1, 10);
  stats.logos = clamp(stats.logos, 1, 10);
  stats.sociology = clamp(stats.sociology, 1, 10);

  return stats;
}

function applyStatModifiers(stats: DerivedStats, modifiers: StatModifiers): void {
  if (modifiers.harmony !== undefined) stats.harmony += modifiers.harmony;
  if (modifiers.aggression !== undefined) stats.aggression += modifiers.aggression;
  if (modifiers.curiosity !== undefined) stats.curiosity += modifiers.curiosity;
  if (modifiers.piety !== undefined) stats.piety += modifiers.piety;
  if (modifiers.naturalism !== undefined) stats.naturalism += modifiers.naturalism;
  if (modifiers.logos !== undefined) stats.logos += modifiers.logos;
  if (modifiers.sociology !== undefined) stats.sociology += modifiers.sociology;
}

// =============================================================================
// Modifier Calculation
// =============================================================================

/**
 * Calculate final gameplay modifiers from all selections.
 * Size provides base, then traits and diet modify multiplicatively or additively.
 */
export function calculateGameplayModifiers(
  size: SizeCategory | null,
  traits: TraitDefinition[],
  diet: DietType | null,
  derivedStats: DerivedStats,
  sizeDefinitions: Record<string, { modifiers: Partial<GameplayModifiers> }>,
  dietDefinitions: Record<string, { modifiers?: Partial<GameplayModifiers> }>
): GameplayModifiers {
  const modifiers = { ...DEFAULT_GAMEPLAY_MODIFIERS };

  // Apply size base modifiers
  if (size && sizeDefinitions[size]) {
    Object.assign(modifiers, sizeDefinitions[size].modifiers);
  }

  // Apply trait modifiers (multiplicative for multipliers, additive for bonuses)
  for (const trait of traits) {
    if (trait.modifierEffects) {
      applyModifierEffects(modifiers, trait.modifierEffects);
    }
  }

  // Apply diet modifiers
  if (diet && dietDefinitions[diet]?.modifiers) {
    applyModifierEffects(modifiers, dietDefinitions[diet].modifiers!);
  }

  // Apply harmony effects on spawn rate and pop cap
  const harmonyFactor = calculateHarmonyFactor(derivedStats.harmony);
  modifiers.spawnRateMultiplier *= harmonyFactor;
  modifiers.popCapMultiplier *= harmonyFactor;

  return modifiers;
}

function applyModifierEffects(
  modifiers: GameplayModifiers,
  effects: Partial<GameplayModifiers>
): void {
  // Multipliers are multiplicative
  const multiplicativeKeys = [
    'hpMultiplier',
    'damageMultiplier',
    'speedMultiplier',
    'spawnRateMultiplier',
    'popCapMultiplier',
    'claimRateMultiplier',
    'terrainCostMultiplier',
    'swimSpeedMultiplier',
    'landSpeedMultiplier',
  ] as const;

  for (const key of multiplicativeKeys) {
    if (effects[key] !== undefined) {
      (modifiers[key] as number) = ((modifiers[key] as number) ?? 1) * effects[key]!;
    }
  }

  // Bonuses are additive or set
  const additiveKeys = [
    'craftingBonus',
    'toolEffectiveness',
    'visionRange',
    'detectionRadius',
    'threatDetection',
    'diseaseResistance',
    'starvationResistance',
    'hpRegenRate',
    'poisonDamage',
    'huntingSuccess',
    'claimResistance',
    'homeDefenseBonus',
    'moraleResistance',
    'panicResistance',
    'soloBonus',
    'allyBonus',
    'elderBonus',
  ] as const;

  for (const key of additiveKeys) {
    if (effects[key] !== undefined) {
      (modifiers as any)[key] = effects[key];
    }
  }
}

/**
 * Calculate harmony's effect on population metrics.
 * Low harmony = less efficient (need more space), high harmony = more efficient.
 */
function calculateHarmonyFactor(harmony: number): number {
  // Harmony ranges from -10 to +10
  // At -10: 0.7x spawn/pop
  // At 0: 1.0x
  // At +10: 1.2x
  if (harmony < 0) {
    return 1.0 + (harmony * 0.03); // -10 -> 0.7, 0 -> 1.0
  } else {
    return 1.0 + (harmony * 0.02); // 0 -> 1.0, +10 -> 1.2
  }
}

// =============================================================================
// Special Abilities Aggregation
// =============================================================================

/**
 * Aggregate special abilities from all selected traits.
 */
export function aggregateSpecialAbilities(traits: TraitDefinition[]): SpecialAbilities {
  const abilities: SpecialAbilities = {};

  for (const trait of traits) {
    if (trait.special) {
      Object.assign(abilities, trait.special);
    }
  }

  return abilities;
}

// =============================================================================
// Validation
// =============================================================================

/**
 * Validate trait selection against requirements and exclusions.
 */
export function validateTraitSelection(
  selectedTraits: TraitDefinition[],
  selectedTraitIds: string[],
  size: SizeCategory | null,
  traitDefinitions: Record<string, TraitDefinition>
): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  const selectedTraitSet = new Set(selectedTraitIds);

  for (const trait of selectedTraits) {
    // Check requirements
    if (trait.requires) {
      for (const requiredId of trait.requires) {
        if (!selectedTraitSet.has(requiredId)) {
          const requiredTrait = traitDefinitions[requiredId];
          errors.push(
            `"${trait.name}" requires "${requiredTrait?.name ?? requiredId}"`
          );
        }
      }
    }

    // Check exclusions
    if (trait.excludes) {
      for (const excludedId of trait.excludes) {
        if (selectedTraitSet.has(excludedId)) {
          const excludedTrait = traitDefinitions[excludedId];
          errors.push(
            `"${trait.name}" cannot be combined with "${excludedTrait?.name ?? excludedId}"`
          );
        }
      }
    }

    // Check size requirements
    if (trait.sizeRequirement && size) {
      if (!trait.sizeRequirement.includes(size)) {
        errors.push(
          `"${trait.name}" is only available for sizes: ${trait.sizeRequirement.join(', ')}`
        );
      }
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}

/**
 * Validate complete species creation state.
 */
export function validateCreationState(state: CreationState): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (!state.name || state.name.trim().length === 0) {
    errors.push('Species name is required');
  }

  if (!state.size) {
    errors.push('Size must be selected');
  }

  if (state.longevity === null) {
    errors.push('Longevity must be selected');
  }

  if (!state.diet) {
    errors.push('Diet must be selected');
  }

  if (!state.favoredTerrain) {
    errors.push('Favored terrain must be selected');
  }

  if (state.pointsRemaining < 0) {
    errors.push(`Over budget by ${Math.abs(state.pointsRemaining)} points`);
  }

  if (state.pointsRemaining > 10) {
    warnings.push(`${state.pointsRemaining} unspent points remaining`);
  }

  // Add trait validation errors
  errors.push(...state.validation.errors);
  warnings.push(...state.validation.warnings);

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}

// =============================================================================
// Point Calculation
// =============================================================================

/**
 * Calculate total points spent on current selections.
 */
export function calculatePointsSpent(
  longevity: LongevityTier | null,
  traits: TraitDefinition[],
  longevityDefinitions: Record<string, { cost: number }>
): number {
  let total = 0;

  // Longevity cost
  if (longevity !== null && longevityDefinitions[longevity]) {
    total += longevityDefinitions[longevity].cost;
  }

  // Trait costs
  for (const trait of traits) {
    total += trait.cost;
  }

  return total;
}

// =============================================================================
// Creation State Management
// =============================================================================

/**
 * Create initial creation state.
 */
export function createInitialState(totalPoints: number = DEFAULT_CREATION_POINTS): CreationState {
  return {
    name: '',
    size: null,
    longevity: null,
    diet: null,
    favoredTerrain: null,
    selectedTraits: [],
    totalPoints,
    pointsSpent: 0,
    pointsRemaining: totalPoints,
    validation: { valid: false, errors: ['Incomplete selections'], warnings: [] },
    previewStats: { ...DEFAULT_DERIVED_STATS },
    previewModifiers: { ...DEFAULT_GAMEPLAY_MODIFIERS },
  };
}

/**
 * Update creation state after a change.
 * Recalculates derived values and validation.
 */
export function updateCreationState(
  state: CreationState,
  traitDefinitions: Record<string, TraitDefinition>,
  sizeDefinitions: Record<string, { modifiers: Partial<GameplayModifiers> }>,
  longevityDefinitions: Record<string, { cost: number }>,
  dietDefinitions: Record<string, { statModifiers?: StatModifiers; modifiers?: Partial<GameplayModifiers> }>
): CreationState {
  const traits = state.selectedTraits
    .map((id) => traitDefinitions[id])
    .filter((t): t is TraitDefinition => t !== undefined);

  // Calculate points spent
  const pointsSpent = calculatePointsSpent(
    state.longevity,
    traits,
    longevityDefinitions
  );

  // Calculate derived stats
  const previewStats = calculateDerivedStats(traits, state.diet, dietDefinitions);

  // Calculate gameplay modifiers
  const previewModifiers = calculateGameplayModifiers(
    state.size,
    traits,
    state.diet,
    previewStats,
    sizeDefinitions,
    dietDefinitions
  );

  // Validate trait selection
  const traitValidation = validateTraitSelection(
    traits,
    state.selectedTraits,
    state.size,
    traitDefinitions
  );

  return {
    ...state,
    pointsSpent,
    pointsRemaining: state.totalPoints - pointsSpent,
    previewStats,
    previewModifiers,
    validation: traitValidation,
  };
}

// =============================================================================
// Species Building
// =============================================================================

/**
 * Build final species definition from creation state.
 * Should only be called after validation passes.
 */
export function buildSpeciesDefinition(
  state: CreationState,
  traitDefinitions: Record<string, TraitDefinition>,
  sizeDefinitions: Record<string, { modifiers: Partial<GameplayModifiers> }>,
  dietDefinitions: Record<string, { statModifiers?: StatModifiers; modifiers?: Partial<GameplayModifiers> }>
): SpeciesDefinition {
  if (!state.size || state.longevity === null || !state.diet || !state.favoredTerrain) {
    throw new Error('Cannot build species with incomplete selections');
  }

  const traits = state.selectedTraits
    .map((id) => traitDefinitions[id])
    .filter((t): t is TraitDefinition => t !== undefined);

  const derivedStats = calculateDerivedStats(traits, state.diet, dietDefinitions);
  const modifiers = calculateGameplayModifiers(
    state.size,
    traits,
    state.diet,
    derivedStats,
    sizeDefinitions,
    dietDefinitions
  );
  const specialAbilities = aggregateSpecialAbilities(traits);

  return {
    id: generateSpeciesId(),
    name: state.name.trim(),
    createdAt: Date.now(),
    size: state.size,
    longevity: state.longevity,
    diet: state.diet,
    favoredTerrain: state.favoredTerrain,
    traits: state.selectedTraits,
    pointsSpent: state.pointsSpent,
    derivedStats,
    modifiers,
    specialAbilities,
  };
}

// =============================================================================
// Utility Functions
// =============================================================================

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

function generateSpeciesId(): string {
  return `species_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// =============================================================================
// Export
// =============================================================================

export {
  DEFAULT_CREATION_POINTS,
  DEFAULT_DERIVED_STATS,
  DEFAULT_GAMEPLAY_MODIFIERS,
};
