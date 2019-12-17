import React from 'react';

import { mount } from 'enzyme';
import { expect } from 'chai';

import Blob from './Blob';

describe('Blob', () => {
  it('renders', () => {
    const wrapper = mount(<Blob arr={['adimo', 'potestas']} />);
    expect(wrapper).to.have.length(1);
  });
});
