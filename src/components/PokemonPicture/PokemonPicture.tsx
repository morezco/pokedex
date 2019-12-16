import React, { useState } from 'react';
import { pictureURL, spriteURL } from 'shared/constants';

interface PokemonPictureProps {
  id: string;
  name: string;
  width?: string;
  height?: string;
}

export default function PokemonPicture({
  id,
  name,
  width,
  height,
}: PokemonPictureProps) {
  const [err, setErr] = useState(0);
  const [url, setUrl] = useState(pictureURL(name));
  return err < 2 ? (
    <img
      onError={() => {
        if (!err) {
          setErr(1);
          setUrl(spriteURL(id));
        } else {
          setErr(2);
        }
      }}
      alt={name}
      width={width}
      height={height}
      src={url}
    ></img>
  ) : null;
}
