import React from 'react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import { expect as ex } from 'chai';

import Routes from './index';

describe('The Routes Component', () => {
  it('renders', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Routes scrollEffects={false} setMinimiseNav={() => {}} />,
      </BrowserRouter>,
    );

    const ProofOfSwitch = getByTestId('adimo');
    expect(ProofOfSwitch).toBeInTheDocument();
  });

  it('navigates', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/pokemon/2']}>
        <Routes scrollEffects={false} setMinimiseNav={() => {}} />,
      </MemoryRouter>,
    );

    const ProofOfLoad = wrapper.find('[data-testid="Loading"]');
    ex(ProofOfLoad).to.have.length.greaterThan(1);
  });
});
