import React from 'react';
import { mount } from 'enzyme';

import Search from './Search';

import PokemonStore from 'store/PokemonStore';

describe('The Search Bar', () => {
  it('should affect the store when written on', () => {
    const wrapper = mount(<Search />);
  });
});
