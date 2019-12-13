import React from 'react';
import { observer } from 'mobx-react';

import { Container, Content } from './styles';

import Tile from './Tile/Tile';

import { Pokemons } from 'store';

interface PokemonDataBlob {
  name: string;
  url: string;
}

export default observer(function List() {
  return (
    <Container>
      <Content>
        {Pokemons.results.map((result: PokemonDataBlob) => (
          <Tile data={result} />
        ))}
      </Content>
    </Container>
  );
});
