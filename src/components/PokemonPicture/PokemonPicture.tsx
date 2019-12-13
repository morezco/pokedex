import React, { useState } from 'react';

import { Picture } from './styles';

export interface PokemonPictureProps {
  id: string | number;
  width?: number;
  height?: number;
}

export default function PokemonPicture({
  id,
  width,
  height,
}: PokemonPictureProps) {
  const [error, setError] = useState(false);
  return !error ? (
    <Picture
      alt={'Pokemon'}
      width={width || '80'}
      height={height || '80'}
      onError={() => setError(true)}
      src={`https://img.pokemondb.net/artwork/${String(id).toLowerCase()}.jpg`}
    />
  ) : null;
}
