import React from 'react';

import { mount } from 'enzyme';
import { expect } from 'chai';

import Gender from './Gender';

describe('Gender', () => {
  it('renders', () => {
    const wrapper = mount(<Gender rate={5} />);
    expect(wrapper).to.have.length(1);
  });
});
