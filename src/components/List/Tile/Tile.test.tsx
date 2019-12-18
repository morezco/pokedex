import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { MemoryRouter } from 'react-router-dom';

import { Tile } from './Tile';

import { pokemonDetail } from 'routes';

describe('The Tile Component', () => {
  it('should push to the router upon click', done => {
    const history: Array<string> = [];
    const wrapper = mount(
      <MemoryRouter>
        <Tile
          data={{
            name: 'eevee',
            url: 'https://pokeapi.co/api/v2/pokemon/133/',
          }}
          history={history}
        />
      </MemoryRouter>,
    );

    wrapper.simulate('click');

    setTimeout(() => {
      expect(history).to.have.length(1);
      expect(history[0]).to.be.string(pokemonDetail(133));
      done();
    }, 1000);
  });
});
