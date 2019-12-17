import React from 'react';

import { render } from '@testing-library/react';

import PokemonSprite from './PokemonSprite';

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
});
