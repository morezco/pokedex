/* eslint-disable @typescript-eslint/camelcase */

import { PokemonService } from 'services';

import {
  reduceAbilities,
  reduceStats,
  reorganiseSpecies,
  recursivelySortEvolutionaryData,
} from './processing';

describe('The Pokemon Service', () => {
  it('should be able to get all pokemons', done => {
    PokemonService.getAll().then(data => {
      expect(data.length).toBeGreaterThan(800);
      done();
    });
  });
});

describe('reduceAbilities', () => {
  it('gets an array of abilities and return hidden/name pairs', () => {
    const mock = {
      abilities: [
        { ability: { name: 'A' }, is_hidden: false },
        { ability: { name: 'B' }, is_hidden: true },
      ],
    };

    const exp = [
      ['', 'A'],
      ['hidden', 'B'],
    ];

    mock.abilities = reduceAbilities(mock);
    expect(mock.abilities.join(',')).toBe(exp.join(','));
  });
});

describe('reduceStats', () => {
  it('gets an array of stats returns a new array of objects with changed property names', () => {
    const mock = {
      stats: [
        {
          base_stat: 6,
          effort: 0,
          stat: { name: 'test' },
        },
        {
          base_stat: 7,
          effort: 0,
          stat: { name: 'adimo' },
        },
      ],
    };

    const exp = [
      { base: 6, effort: 0, name: 'test' },
      { base: 7, effort: 0, name: 'adimo' },
    ];

    mock.stats = reduceStats(mock);

    expect(mock.stats.join(',')).toBe(exp.join(','));
  });
});

describe('reorganiseSpecies', () => {
  it('scrambles the species property simpler & brings a few properties to surface level', () => {
    const mock: any = {
      species: {
        genera: [{ language: { name: 'en' }, genus: 'test' }],
        growth_rate: { name: 'slow-medium' },
        egg_groups: [{ name: 'adimo' }, { name: 'potestas' }],
      },
    };

    const expected = {
      species: { name: 'test', egg_groups: ['adimo', 'potestas'] },
      growth_rate: 'slow-medium',
    };

    reorganiseSpecies(mock);

    expect(mock.species.name).toBe(expected.species.name);
    expect(mock.growth_rate).toBe(expected.growth_rate);
    expect(mock.species.egg_groups.join(',')).toBe(
      expected.species.egg_groups.join(','),
    );
  });
});

describe('recursivelySortEvolutionaryData', () => {
  it('recusrively resorts through the evolutionary data', () => {
    const mock: any = {
      name: 'arcanine',
      evolution: {
        chain: {
          evolves_to: [
            {
              evolves_to: [],
              is_baby: false,
              species: {
                name: 'arcanine',
                url: 'https://pokeapi.co/api/v2/pokemon-species/59/',
              },
            },
          ],
          is_baby: false,
          species: {
            name: 'growlithe',
            url: 'https://pokeapi.co/api/v2/pokemon-species/58/',
          },
        },
      },
      id: 25,
    };

    const expected = {
      evolves_to: [],
      is_baby: false,
      species: {
        name: 'arcanine',
        url: 'https://pokeapi.co/api/v2/pokemon-species/59/',
      },
    };

    recursivelySortEvolutionaryData(mock);

    expect(mock.evolution.species.name).toBe(expected.species.name);
  });
});
