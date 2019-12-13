import React from 'react';

import { Container } from './styles';

import { PokemonPicture } from 'components';

export interface TileProps {
  data: {
    name: string;
    url: string;
  };
}

export default function Tile({ data }: TileProps) {
  return (
    <Container>
      <h5>{data.name}</h5>
      <PokemonPicture id={data.name} />
    </Container>
  );
}
