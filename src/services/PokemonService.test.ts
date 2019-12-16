import { PokemonService } from 'services';

//import nock from 'nock';

describe('The Pokemon Service', () => {
  it('should be able to get all pokemons', done => {
    PokemonService.getAll().then(data => {
      expect(data.length).toBeGreaterThan(800);
      done();
    });
  });
});
