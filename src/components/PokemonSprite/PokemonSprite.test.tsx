import React from 'react';

import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import { expect as cexpect } from 'chai';

import { PokemonSprite } from './PokemonSprite';

describe('The Pokemon Sprite component', () => {
  it('renders', () => {
    const { getByTestId } = render(
      <PokemonSprite
        url={
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png'
        }
      />,
    );
    const sprite = getByTestId('pokemonsprite');
    expect(sprite).toBeInTheDocument();
  });

  it('does not render upon error', () => {
    const wrapper = mount(
      <PokemonSprite
        url={
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png'
        }
      />,
    );

    wrapper.simulate('error');

    cexpect(wrapper.find('img')).not.to.have.length;
  });

  it('links to its represented pokemon', () => {
    const history: Array<string> = [];
    const wrapper = mount(
      <PokemonSprite
        url={
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png'
        }
        history={history}
      />,
    );

    wrapper.simulate('click');

    cexpect(history).to.have.length(1);
  });
});
