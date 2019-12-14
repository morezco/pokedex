import React from 'react';
import { pictureURL } from 'shared/constants';

interface PokemonPictureProps {
  name: string;
  width?: string;
  height?: string;
}

export default function PokemonPicture({
  name,
  width,
  height,
}: PokemonPictureProps) {
  return (
    <img alt={name} width={width} height={height} src={pictureURL(name)}></img>
  );
}
