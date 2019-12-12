import React, { useRef, useEffect } from 'react';
import { observer } from 'mobx-react';

import { Container, Input } from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCog } from '@fortawesome/free-solid-svg-icons';

import { PokemonStore } from 'store';

export default observer(function Search() {
  const Clean = (x: string) =>
    String(x)
      .normalize()
      .toLowerCase();

  const ExtractProperty = (x: any) => Clean(x.name || x.url || '');

  const changeHandler = (e: any) => {
    const {
      target: { value },
    } = e;

    PokemonStore.search((x: any) => ExtractProperty(x).includes(Clean(value)));
  };

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current!.focus();
  }, [ref]);

  return (
    <Container>
      <Input placeholder={'Pokémon'} ref={ref} onChange={changeHandler} />
      <FontAwesomeIcon
        className='icon'
        icon={PokemonStore.fetching ? faCog : faSearch}
        {...{ spin: PokemonStore.fetching }}
      />
    </Container>
  );
});
