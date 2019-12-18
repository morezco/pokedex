import React from 'react';
import { pokemonDetail } from 'routes';
import { extractId } from 'shared/helpers';
import { withRouter } from 'react-router-dom';

import { Container } from './styles';

import { PokemonSprite } from 'components';

export function Tile({ data, history, hovering, setHovering, index }: any) {
  const gotoPokemon = () =>
    setTimeout(() => {
      history.push(`${pokemonDetail(extractId(data.url))}`);
    }, 1000);

  return (
    <Container
      hovering={hovering}
      index={index}
      onMouseEnter={() => setHovering(index)}
      onClick={gotoPokemon}
    >
      <h5>{data.name}</h5>
      <PokemonSprite url={data.url} />
    </Container>
  );
}

export default withRouter(Tile);
