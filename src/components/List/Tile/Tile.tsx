import React from 'react';
import { pokemonDetail } from 'routes';
import { extractId } from 'shared/helpers';
import { withRouter } from 'react-router-dom';

import { Container } from './styles';

import { PokemonSprite } from 'components';

export function Tile({ data, history }: any) {
  const gotoPokemon = () =>
    history.push(`${pokemonDetail(extractId(data.url))}`);

  return (
    <Container className={'Tile'} onClick={gotoPokemon}>
      <h5>{data.name}</h5>
      <PokemonSprite url={data.url} />
    </Container>
  );
}

export default withRouter(Tile);
