import React from 'react';

import { mount } from 'enzyme';
import { expect } from 'chai';

import Table from './Table';
import { StatsTable, EvolutionaryTable, evo } from './processing';

describe('Table', () => {
  it('renders', () => {
    const [delay, setDelay] = [{ value: 0 }, (x: number) => (delay.value = x)];
    const wrapper = mount(
      <Table
        title={'test'}
        delay={delay.value}
        setDelay={setDelay}
        data={[{ name: 'adimo', value: 50 }]}
      />,
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

describe('EvolutionaryTable', () => {
  it('returns evolutionary data', () => {
    const history: Array<string> = [];
    const mock = {
      evolution: {
        evolves_to: [
          {
            species: {
              url: 'https://pokeapi.co/api/v2/pokemon/1/',
              name: 'adimo',
            },
          },
          {
            species: {
              url: 'https://pokeapi.co/api/v2/pokemon/2/',
              name: 'potestas',
            },
          },
        ],
      },
    };
    const table = EvolutionaryTable(mock, history);
    expect(table.title).to.be.string('Possible Evolutions');

    table.data[0].act();
    expect(history[0]).to.be.string(`/pokemon/1`);
  });
});

describe('The stats table', () => {
  it('returns a table props object', () => {
    const mock = {
      stats: [
        {
          name: 'adimo',
          value: 3,
        },
        {
          name: 'potestas',
          value: 4,
        },
      ],
    };

    const table = StatsTable(mock);
    expect(table.title).to.be.string('Base stats');
  });
});
