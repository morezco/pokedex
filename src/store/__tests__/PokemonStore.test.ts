import PokemonStore from '../PokemonStore';

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
