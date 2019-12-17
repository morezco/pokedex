import React from 'react';

import { mount } from 'enzyme';
import { expect } from 'chai';

import Steps from './Steps';

describe('Steps', () => {
  it('renders', () => {
    const wrapper = mount(<Steps cycles={50} />);
    expect(wrapper).to.have.length(1);
  });
});
