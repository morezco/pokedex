import React from 'react';

import { render } from '@testing-library/react';

import PokemonPicture from './PokemonPicture';

describe('The Pokemon Picture component', () => {
  it('renders', () => {
    const { getByTestId } = render(
      <PokemonPicture id={'1'} name={'bulbasaur'} />,
    );
    const picture = getByTestId('pokemonpicture');
    expect(picture).toBeInTheDocument();
  });
});
