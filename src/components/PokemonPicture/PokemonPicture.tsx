import React, { useState } from 'react';

import { Picture } from './styles';

export interface PokemonPictureProps {
  url: string;
  width?: number;
  height?: number;
}

export default function PokemonPicture({
  url,
  width,
  height,
}: PokemonPictureProps) {
  const [error, setError] = useState(false);
  const arr = url.split('/');
  return !error ? (
    <Picture
      alt={'Pokemon'}
      width={width || '80'}
      height={height || '80'}
      onError={() => setError(true)}
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        arr[arr.length - 2]
      }.png`}
    />
  ) : null;
}
