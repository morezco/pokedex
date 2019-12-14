import React from 'react';
import { observer } from 'mobx-react';

import { Content } from './styles';

import Tile from './Tile/Tile';

import { Pokemons } from 'store';

interface PokemonDataBlob {
  name: string;
  url: string;
}

export default observer(function List() {
  return (
    <Content>
      {Pokemons.results.map((result: PokemonDataBlob, i: number) => (
        <Tile data={result} key={i} />
      ))}
    </Content>
  );
});
