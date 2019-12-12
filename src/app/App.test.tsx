import React from 'react';
import { render } from '@testing-library/react';
import { Navbar } from 'components';
import { shallow } from 'enzyme';

import App from './App';

describe('App Component', () => {
  it('renders', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Navbar)).toHaveLength(1);
  });
});
