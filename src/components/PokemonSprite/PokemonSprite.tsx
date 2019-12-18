import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import { Picture } from './styles';

import { spriteURL } from 'shared/constants';
import { extractId } from 'shared/helpers';
import { pokemonDetail } from 'routes';

export function PokemonSprite({ url, width, height, history }: any) {
  const [error, setError] = useState(false);
  const id = extractId(url);
  return !error ? (
    <Picture
      data-testid='pokemonsprite'
      alt={'Pokemon'}
      width={width || '80'}
      height={height || '80'}
      onError={() => setError(true)}
      onClick={() =>
        setTimeout(() => {
          history.push(pokemonDetail(id));
        }, 600)
      }
      src={spriteURL(id)}
    />
  ) : null;
}

export default withRouter(PokemonSprite);
