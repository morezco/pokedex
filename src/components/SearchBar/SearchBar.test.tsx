import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import Searchbar from './SearchBar';
import { minimisedNav, SearchContainerHide } from './styles';

describe('The Search bar Component', () => {
  it('renders', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Searchbar />
      </MemoryRouter>,
    );
    const El = getByTestId('Topbar');
    expect(El).toBeInTheDocument();
  });
});

describe('minimisedNav', () => {
  it('should return css if minimiseNav is true, falsies otherwise', () => {
    expect(minimisedNav()).toBe(undefined);
    expect(minimisedNav(false)).toBe(false);
    expect(minimisedNav(true)).toHaveLength(1);
  });
});

describe('SearchContainerHide', () => {
  it('should return css if hide is true, falsies otherwise', () => {
    expect(SearchContainerHide()).toBe(undefined);
    expect(SearchContainerHide(false)).toBe(false);
    expect(SearchContainerHide(true)).toHaveLength(1);
  });
});
