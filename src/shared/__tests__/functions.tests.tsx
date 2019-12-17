import React from 'react';

import { mount } from 'enzyme';

import { useScrollPosition } from 'shared/hooks';
import { spriteURL, pictureURL } from 'shared/constants';
import { Sum, extractId, nameLike } from 'shared/helpers';
import { Clean, ExtractProperty } from 'shared/storeSearch';
import { pkdb, itemdb } from 'shared/imaging';

describe('spriteURL', () => {
  it('should get an id and return it in a github sprite URL', () => {
    expect(spriteURL('1')).toBe(
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    );
  });
});

describe('pictureURL', () => {
  it('should get an id and return it in a pokemondb image URL', () => {
    expect(pictureURL('pikachu')).toBe(
      'https://img.pokemondb.net/artwork/pikachu.jpg',
    );
  });
});

describe('Sum', () => {
  it('should get an array of numbers and return the sum of all of them', () => {
    expect(Sum([1, 2])).toBe(3);
    expect(Sum([8, 9, 1, 4])).toBe(22);
  });

  it('should apply the modifier function to the result', () => {
    expect(Sum([3, 3], (result: number) => result * 2)).toBe(12);
    expect(Sum([3, 3], (result: number) => `R$${result},99`)).toBe(`R$6,99`);
  });
});

describe('extractId', () => {
  it("get a URL and return its id, according to PokéAPI's slashing pattern", () => {
    expect(extractId('http://pokeapi.co/api/v2/resource/1/')).toBe('1');
    expect(extractId(new URL('http://pokeapi.co/api/v2/resource/9/'))).toBe(
      '9',
    );
  });
});

describe('nameLike', () => {
  it('should get an unformatted name and return the formatted version (pt-BR standard)', () => {
    expect(nameLike('pikachu')).toBe('Pikachu');
    expect(nameLike('ana carolina')).toBe('Ana Carolina');
  });
});

describe('Clean', () => {
  it('should be able to normalise user input', () => {
    expect(Clean('Ádimo pötestas')).toBe('adimo potestas');
  });
});

describe('ExtractProperty', () => {
  it('should be able to extract queryable data from objects', () => {
    expect(ExtractProperty({ name: 'Pikachu' })).toBe('pikachu');
    expect(ExtractProperty({ url: 'Pikachu' })).toBe('pikachu');
    expect(ExtractProperty(1)).toBe('');
  });
});

describe('useScrollPosition', () => {
  it('should bind a scrolling listener to the window', () => {
    const ThrowAwayComponent = () => {
      useScrollPosition(({ currPos }: any) => {
        // eslint-disable-next-line
        currPos.y > -50 !== false;
      }, []);

      return <div>test</div>;
    };

    const wrapper = mount(<ThrowAwayComponent />);
  });
});

describe('pkdb', () => {
  it('returns the pokemon database image url for any given pokemon', () => {
    expect(pkdb('Pikachu')).toBe(
      'https://img.pokemondb.net/artwork/pikachu.jpg',
    );
  });
});
