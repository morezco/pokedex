import React from 'react';
import { render } from '@testing-library/react';

import Intro from './Intro';

describe('The Intro view', () => {
  it('should render a title by default', () => {
    const { getByText, getByTestId } = render(<Intro />);

    const IntroTitle = getByText('Intro');
    const Search = getByTestId('SearchContainer');

    expect(IntroTitle).toBeInTheDocument();
    expect(Search).toBeInTheDocument();
  });
});
