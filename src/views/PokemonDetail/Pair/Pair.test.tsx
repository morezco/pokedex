import React from 'react';

import { mount } from 'enzyme';
import { expect } from 'chai';

import Pair from './Pair';

describe('List', () => {
  it('renders', () => {
    const wrapper = mount(
      <Pair
        arr={[
          ['adimo', 'potestas'],
          ['tua', 'quae'],
        ]}
      />,
    );
    expect(wrapper).to.have.length(1);
  });
});
