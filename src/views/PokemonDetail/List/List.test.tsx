import React from 'react';

import { mount } from 'enzyme';
import { expect } from 'chai';

import List from './List';

describe('List', () => {
  it('renders', () => {
    const wrapper = mount(<List arr={['tua', 'quae']} />);
    expect(wrapper).to.have.length(1);
  });
});
