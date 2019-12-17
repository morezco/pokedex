import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { TESTING } from 'shared/constants';

import { Picture } from './styles';

import { spriteURL } from 'shared/constants';
import { extractId } from 'shared/helpers';

function PokemonSprite({ url, width, height, history }: any) {
  const [error, setError] = useState(false);
  const id = extractId(url);
  return !error ? (
    <Picture
      data-testid='pokemonsprite'
      alt={'Pokemon'}
      width={width || '80'}
      height={height || '80'}
      onError={() => setError(true)}
      onClick={() => history.push(`/pokemon/${id}`)}
      src={spriteURL(id)}
    />
  ) : null;
}

export default !TESTING ? withRouter(PokemonSprite) : PokemonSprite;
