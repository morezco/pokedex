import React from 'react';

import { mount } from 'enzyme';
import { expect } from 'chai';

import Table from './Table';
import {
  PokedexTable,
  TrainingTable,
  BreedingTable,
  StatsTable,
  EvolutionaryTable,
  evo,
} from './processing';

describe('Table', () => {
  it('renders', () => {
    const wrapper = mount(
      <Table title={'test'} data={[{ name: 'adimo', value: 50 }]} />,
    );
    expect(wrapper).to.have.length(1);
  });
});

describe('evo', () => {
  it('atests the presence of evolutionary data', () => {
    const mock0 = {
      evolution: {
        evolves_to: [],
      },
    };

    const mock1 = {
      evolution: {
        evolves_to: ['test'],
      },
    };

    expect(evo(mock0)).to.be.null;
    expect(evo(mock1)).to.be.equal(1);
  });
});

// describe('EvolutionaryTable', () => {
//   it('returns evolutionary data', () => {
//     const data = EvolutionaryTable();
//   });
// });
