import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import App from './App';
import { SearchBar } from 'components';

describe('App Component', () => {
  const wrapper = mount(<App />);

  it('renders', () => {
    const Topbar = wrapper.find('[data-testid="Topbar"]');
    expect(Topbar).to.have.length(1);
  });

  it('toggles scroll effects upon scrolling', () => {
    const Searchbar = wrapper.find(SearchBar);
    expect(Searchbar.prop('scrollEffects')).to.be.true;
  });
});
