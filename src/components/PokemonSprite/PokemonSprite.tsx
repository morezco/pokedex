import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import { Picture } from './styles';

import { spriteURL } from 'shared/constants';
import { extractId } from 'shared/helpers';
import { pokemonDetail } from 'routes';

import { Loading } from 'components';

export function PokemonSprite({ url, width, height, history }: any) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const id = extractId(url);
  useEffect(() => setLoading(true), [url]);
  return !error ? (
    <>
      <Picture
        style={{ display: loading ? 'none' : 'block' }}
        data-testid='pokemonsprite'
        alt={'Pokemon'}
        width={width || '80'}
        height={height || '80'}
        onLoad={() => setLoading(false)}
        onError={() => setError(true)}
        onClick={() =>
          setTimeout(() => {
            history.push(pokemonDetail(id));
          }, 600)
        }
        src={spriteURL(id)}
      />
      {loading && <Loading style={{ color: 'grey', fontSize: '0.7em' }} />}
    </>
  ) : null;
}

export default withRouter(PokemonSprite);
