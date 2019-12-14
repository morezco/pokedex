import React, { useState } from 'react';

import { Picture } from './styles';

import { spriteURL } from 'shared/constants';
import { extractId } from 'shared/helpers';

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
  return !error ? (
    <Picture
      alt={'Pokemon'}
      width={width || '80'}
      height={height || '80'}
      onError={() => setError(true)}
      src={spriteURL(extractId(url))}
    />
  ) : null;
}
