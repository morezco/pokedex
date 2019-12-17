import React from 'react';

import { mount } from 'enzyme';
import { expect } from 'chai';

import Stats, { statColour } from './Stats';

describe('The Stats Component', () => {
  it('renders', () => {
    const wrapper = mount(<Stats stat={50} />);
    expect(wrapper).to.have.length(1);
  });
});

describe('statColour', () => {
  it('returns colours based on a number input', () => {
    expect(statColour(0)).to.be.string('orange');
    expect(statColour(55)).to.be.string('yellow');
    expect(statColour(80)).to.be.string('rgb(151, 224, 49)');
    expect(statColour(120)).to.be.string('rgb(4, 198, 90)');
    expect(statColour(130)).to.be.string('#33C0FD');
  });
});
