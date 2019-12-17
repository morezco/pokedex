import React from 'react';

import { render } from '@testing-library/react';

import Loading from './Loading';

describe('The Loading Component', () => {
  it('renders', () => {
    const { getByTestId } = render(<Loading />);
    const Loader = getByTestId('Loading');
    expect(Loader).toBeInTheDocument();
  });
});
