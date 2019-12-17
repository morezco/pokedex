import React from 'react';

import { mount } from 'enzyme';
import { expect } from 'chai';

import Row from './Row';
import Styled from './styles';

describe('The Row Component', () => {
  it('renders', () => {
    const wrapper = mount(<Row />);
    expect(wrapper.find('.row')).to.have.length.at.least(1);
  });

  it('should not have any broken styles', () => {
    expect(Styled.RIGHT()).to.be.undefined;
    expect(Styled.RIGHT(false)).to.be.false;
    expect(Styled.RIGHT(true)).to.have.length(3);
    expect(Styled.COL()).to.be.undefined;
    expect(Styled.COL(true)).to.have.length(1);
    expect(Styled.CENTER()).to.be.undefined;
    expect(Styled.CENTER(true)).to.have.length(3);
    expect(Styled.SPACED()).to.be.undefined;
    expect(Styled.SPACED(true)).to.have.length(1);
    expect(Styled.EVEN()).to.be.undefined;
    expect(Styled.EVEN(true)).to.have.length(1);
    expect(Styled.AROUND()).to.be.undefined;
    expect(Styled.AROUND(true)).to.have.length(1);
  });
});
