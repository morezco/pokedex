import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

import Views from 'views';

describe('App Component', () => {
  it('renders', () => {
    const { getByTestId } = render(<App />);
    const AppElement = getByTestId('app');
    expect(AppElement).toBeInTheDocument();
  });
});
