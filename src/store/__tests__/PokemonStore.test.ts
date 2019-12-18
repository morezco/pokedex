import PokemonStore from '../PokemonStore';

import nock from 'nock';

import { ditto, pokemonsCollection } from 'tests/mocks';

declare const process: any;

const { REACT_APP_API_URL } = process.env;

const pokemons = (uri: string) => {
  const pieces = uri
    ?.split('/')
    .slice(3)
    .map(piece =>
      piece.includes('?') ? piece.substring(0, piece.indexOf('?')) : piece,
    );

  return pieces[0] === 'pokemon' && pieces.length === 1;
};

const pokemon = (uri: string) => {
  const pieces = uri
    ?.split('/')
    .slice(3)
    .map(piece =>
      piece.includes('?') ? piece.substring(0, piece.indexOf('?')) : piece,
    );

  return pieces[0] === 'pokemon' && pieces.length === 2;
};

nock(String(REACT_APP_API_URL))
  .get(pokemon)
  .reply(200, ditto)
  .get(pokemons)
  .reply(200, pokemonsCollection)
  .get(/.*/)
  .reply(200, pokemonsCollection);

describe('The Pokemon Store', () => {
  it('should be able to fetch pokemons', done => {
    PokemonStore.loadCollection();
    expect(PokemonStore.fetching).toBe(true);
    setTimeout(() => {
      expect(PokemonStore.collection.length).toBeGreaterThan(800);
      expect(PokemonStore.fetching).toBe(false);
      done();
    }, 2000);
  });

  it('should be able to get a specific pokemon', done => {
    PokemonStore.fetchPokemon('ditto');
    expect(PokemonStore.fetching).toBe(true);
    setTimeout(() => {
      expect(PokemonStore.pokemon).toHaveProperty('id');
      expect(PokemonStore.fetching).toBe(false);
      done();
    }, 2000);
  });

  it('should be able to search for a subset of pokemon', done => {
    PokemonStore.search((x: any) => x.name === 'ditto');
    setTimeout(() => {
      expect(PokemonStore.results).toBeInstanceOf(Array);
      expect(PokemonStore.results.length).toBeGreaterThan(0);
      expect(PokemonStore.searching).toBe(false);
      done();
    }, 2000);
  });

  it('should be able to turn a string into a filter lens', () => {
    const lens = PokemonStore.convertStringToLens('Adimo');
    const mockResults = [{ name: 'ADIMO POTESTAS' }, { name: 'lorem IPSUM' }];

    expect(mockResults.filter(lens).slice(0, 50)).toHaveLength(1);
  });

  it('should clear its pokemon selection when prompted to', done => {
    PokemonStore.clearPokemon();
    expect(PokemonStore.pokemon).toBe(null);

    PokemonStore.fetchPokemon(1);

    setTimeout(() => {
      expect(PokemonStore.pokemon).not.toBe(null);

      PokemonStore.clearPokemon();
      expect(PokemonStore.pokemon).toBe(null);
      done();
    }, 1000);
  });
});
