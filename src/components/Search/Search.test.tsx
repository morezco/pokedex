import React from 'react';
import { mount } from 'enzyme';

import Search from './Search';
import { Input } from './styles';

import { Pokemons } from 'store';

describe('The Search Bar', () => {
  it('should affect the store when written on', () => {
    const wrapper = mount(<Search />);
    const input = wrapper.find(Input);

    input.simulate('change', { target: { value: 'pikachu' } });

    expect(Pokemons.lookup).toBe('pikachu');
  });
});
