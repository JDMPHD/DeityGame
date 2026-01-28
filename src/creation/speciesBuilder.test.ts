import { describe, it, expect } from 'bun:test';
import {
  validateTraitSelection,
  updateCreationState,
  createInitialState
} from './speciesBuilder';
import type {
  TraitDefinition,
  SizeCategory,
  TraitCollection,
  GameplayModifiers
} from '../types/species';

// Mock Data
const mockTraits: Record<string, TraitDefinition> = {
  'trait_a': {
    id: 'trait_a',
    name: 'Trait A',
    description: 'A trait',
    category: 'physical',
    cost: 1
  },
  'trait_b': {
    id: 'trait_b',
    name: 'Trait B',
    description: 'B trait',
    category: 'physical',
    cost: 1,
    requires: ['trait_a']
  },
  'trait_c': {
    id: 'trait_c',
    name: 'Trait C',
    description: 'C trait',
    category: 'physical',
    cost: 1,
    excludes: ['trait_a']
  },
  'trait_d': {
    id: 'trait_d',
    name: 'Trait D',
    description: 'D trait',
    category: 'physical',
    cost: 1,
    sizeRequirement: ['huge']
  }
};

const mockSizeDefinitions: Record<string, { modifiers: Partial<GameplayModifiers> }> = {
  'middling': { modifiers: { hpMultiplier: 1.0 } },
  'huge': { modifiers: { hpMultiplier: 2.0 } }
};

const mockLongevityDefinitions: Record<string, { cost: number }> = {
  '3': { cost: 3 }
};

const mockDietDefinitions: Record<string, any> = {
  'omnivore': { statModifiers: {}, modifiers: {} }
};

describe('validateTraitSelection', () => {
  it('should validate valid selection', () => {
    const result = validateTraitSelection([mockTraits['trait_a']], ['trait_a'], 'middling', mockTraits);
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  it('should fail when requirement missing', () => {
    const result = validateTraitSelection([mockTraits['trait_b']], ['trait_b'], 'middling', mockTraits);
    expect(result.valid).toBe(false);
    expect(result.errors[0]).toContain('requires "Trait A"');
  });

  it('should fail when exclusion present', () => {
    const result = validateTraitSelection(
      [mockTraits['trait_a'], mockTraits['trait_c']],
      ['trait_a', 'trait_c'],
      'middling',
      mockTraits
    );
    expect(result.valid).toBe(false);
    expect(result.errors[0]).toContain('cannot be combined with');
  });

  it('should fail when size requirement not met', () => {
    const result = validateTraitSelection([mockTraits['trait_d']], ['trait_d'], 'middling', mockTraits);
    expect(result.valid).toBe(false);
    expect(result.errors[0]).toContain('only available for sizes');
  });

  it('should pass when size requirement met', () => {
    const result = validateTraitSelection([mockTraits['trait_d']], ['trait_d'], 'huge', mockTraits);
    expect(result.valid).toBe(true);
  });
});

describe('updateCreationState', () => {
  it('should update state and validate traits', () => {
    let state = createInitialState();
    state.selectedTraits = ['trait_a'];
    state.size = 'middling';
    state.longevity = 3 as any;
    state.diet = 'omnivore';

    const newState = updateCreationState(
        state,
        mockTraits,
        mockSizeDefinitions,
        mockLongevityDefinitions,
        mockDietDefinitions
    );

    expect(newState.validation.valid).toBe(true);
  });
});
