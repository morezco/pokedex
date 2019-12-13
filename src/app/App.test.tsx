import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

describe('App Component', () => {
  it('renders', () => {
    const { getByTestId } = render(<App />);
    const Topbar = getByTestId('Topbar');
    expect(Topbar).toBeInTheDocument();
  });
});
