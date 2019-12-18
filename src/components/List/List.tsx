import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react';

import { Content } from './styles';

import Tile from './Tile/Tile';

import { Pokemons } from 'store';

interface PokemonDataBlob {
  name: string;
  url: string;
}

export default observer(function List() {
  const { pokemon } = Pokemons;

  const [hovering, setHovering] = useState(-1);

  useEffect(() => {
    if (pokemon) {
      Pokemons.clearPokemon();
    }
  }, [pokemon]);

  return (
    <Content>
      {Pokemons.results.map((result: PokemonDataBlob, i: number) => (
        <Tile
          hovering={hovering}
          setHovering={setHovering}
          data={result}
          key={i}
          index={i}
        />
      ))}
    </Content>
  );
});
