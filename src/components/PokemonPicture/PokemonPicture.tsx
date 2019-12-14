import React from 'react';
import { pictureURL } from 'shared/constants';

import { Container } from './styles';

interface PokemonPictureProps {
  name: string;
}

export default function PokemonPicture({ name }: PokemonPictureProps) {
  return (
    <Container>
      <img alt={name} src={pictureURL(name)}></img>
    </Container>
  );
}
