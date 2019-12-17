import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { mount } from 'enzyme';
import { expect } from 'chai';

import List from './List';
import { Tile } from './Tile/Tile';
import { Pokemons } from 'store';

describe('The List component', () => {
  it('should clear the pokemon off the store when mounted', done => {
    Pokemons.fetchPokemon(1);
    setTimeout(() => {
      expect(Pokemons.pokemon).not.to.be.null;

      mount(
        <MemoryRouter>
          <List />
        </MemoryRouter>,
      );
      expect(Pokemons.pokemon).to.be.null;
      done();
    }, 1000);
  });

  it('should list all of the data in the results array of the pokemon store', done => {
    Pokemons.search('eevee');
    const wrapper = mount(
      <MemoryRouter>
        <List />
      </MemoryRouter>,
    );

    setTimeout(() => {
      expect(wrapper.find(Tile)).to.have.length(1);
      done();
    }, 1000);
  });
});
