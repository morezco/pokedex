import React from 'react';
import { pokemonDetail } from 'routes';
import { extractId } from 'shared/helpers';
import { withRouter } from 'react-router-dom';

import { Container } from './styles';

import { PokemonPicture } from 'components';

function Tile({ data, history }: any) {
  const openPokemon = () =>
    history.push(`${pokemonDetail(extractId(data.url))}`);
  console.log(pokemonDetail());
  return (
    <Container onClick={openPokemon}>
      <h5>{data.name}</h5>
      <PokemonPicture url={data.url} />
    </Container>
  );
}

export default withRouter(Tile);
