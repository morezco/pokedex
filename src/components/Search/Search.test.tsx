import React from 'react';
import { mount } from 'enzyme';

import Search from './Search';
import { Input } from './styles';

import { Pokemons } from 'store';
import { Clean, ExtractProperty } from './functions';

describe('The Search Bar', () => {
  const wrapper = mount(<Search />);
  it('should affect the store when written on', () => {
    const input = wrapper.find(Input);

    input.simulate('change', { target: { value: 'pikachu' } });

    expect(Pokemons.lookup).toBe('pikachu');
  });

  it('should be able to normalise user input', () => {
    expect(Clean('Ádimo pötestas')).toBe('adimo potestas');
  });

  it('should be able to extract queryable data from objects', () => {
    expect(ExtractProperty({ name: 'Pikachu' })).toBe('pikachu');
  });
});
