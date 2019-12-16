import React from 'react';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import Intro from './Intro';

import { Pokemons } from 'store';

describe('The Intro view', () => {
  const wrapper = mount(
    <Intro scrollEffects={false} setMinimiseNav={() => {}} />,
  );

  it('should render a title by default', () => {
    const IntroTitle = wrapper.find('Intro');
    expect(IntroTitle).to.have.length(1);
  });

  it('should render the results grid when searching', () => {
    Pokemons.lookup = 'a';

    const grid = wrapper.find('[data-testid="grid"]');
    expect(grid).to.have.length(1);

    Pokemons.lookup += 'bhugvycdtryes';
    expect(grid).not.to.have.length;
  });

  // it('renders descriptive texts according to result presence', () => {
  //   Pokemons.lookup = 'a';

  //   const resultCount = getByTestId('resultcount');
  //   const noResultWarning = getByTestId('noresultwarning');

  //   expect(resultCount).toBeInTheDocument();
  //   expect(noResultWarning).not.toBeInTheDocument();

  //   Pokemons.lookup = 'awnoeiufbeiwqf';

  //   expect(resultCount).not.toBeInTheDocument();
  //   expect(noResultWarning).toBeInTheDocument();
  // });
});
