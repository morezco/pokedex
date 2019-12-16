import React from 'react';
import { mount } from 'enzyme';

import Search from './Search';
import { Input } from './styles';

import { Pokemons } from 'store';

import { changeHandler } from './handlers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

describe('The Search Bar', () => {
  const wrapper = mount(<Search />);
  it('should affect the store when written on', () => {
    const input = wrapper.find(Input);

    input.simulate('change', { target: { value: 'pikachu' } });

    expect(Pokemons.lookup).toBe('pikachu');
  });

  it('should signal the fetching status of the Pokemon Store with a font awesome icon', done => {
    const icon = wrapper.find(FontAwesomeIcon);

    // Pokemons.loadCollection();
    setTimeout(() => {
      // console.log(icon.debug());
      expect(icon.prop('spin')).toBe(true);
      done();
    }, 1000);
  });
});

describe('The change handler of the Search component', () => {
  it('should properly extract the lookup value and set it into the Pokemons Store', () => {
    changeHandler({
      target: { value: 'test' },
    }),
      expect(Pokemons.lookup).toBe('test');
  });
});
