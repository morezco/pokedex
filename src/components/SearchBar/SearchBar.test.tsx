import React from 'react';

import { render } from '@testing-library/react';

import { mount } from 'enzyme';
import { expect as ex } from 'chai';

import Searchbar from './SearchBar';

describe('The Search bar Component', () => {
  it('renders', () => {
    const { getByTestId } = render(<Searchbar />);
    const El = getByTestId('Topbar');
    expect(El).toBeInTheDocument();
  });
});
