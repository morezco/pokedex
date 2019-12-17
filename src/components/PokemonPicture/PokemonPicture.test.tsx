import React from 'react';

import { render } from '@testing-library/react';

import { mount } from 'enzyme';
import { expect as cexpect } from 'chai';

import PokemonPicture from './PokemonPicture';

describe('The Pokemon Picture component', () => {
  it('renders', () => {
    const { getByTestId } = render(
      <PokemonPicture id={'1'} name={'bulbasaur'} />,
    );
    const picture = getByTestId('pokemonpicture');
    expect(picture).toBeInTheDocument();
  });

  it('renders off the pokemon database image by default', () => {
    const wrapper = mount(<PokemonPicture id={'1'} name={'bulbasaur'} />);
    const image = wrapper.find('img');
    cexpect(image.prop('src')).to.be.string(
      'https://img.pokemondb.net/artwork/bulbasaur.jpg',
    );
  });

  it('renders off a sprite as fallback', () => {
    const wrapper = mount(<PokemonPicture id={'1'} name={'bulbasaur'} />);
    wrapper.simulate('error');
    cexpect(wrapper.find('img').prop('src')).to.be.string(
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    );
  });

  it('does not render upon error', () => {
    const wrapper = mount(<PokemonPicture id={'1'} name={'bulbasaur'} />);
    wrapper.simulate('error');
    wrapper.simulate('error');
    cexpect(wrapper.find('img')).not.to.have.length;
  });
});
