import React, { useState } from 'react';
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
  const [err, setErr] = useState(false);
  return !err ? (
    <img
      onError={() => setErr(true)}
      alt={name}
      width={width}
      height={height}
      src={pictureURL(name)}
    ></img>
  ) : null;
}
