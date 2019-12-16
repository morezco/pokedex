import React, { useRef, useEffect } from 'react';
import { observer } from 'mobx-react';
import { Clean, ExtractProperty } from './functions';

import { Container, Input } from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCog } from '@fortawesome/free-solid-svg-icons';

import { Pokemons } from 'store';

export default observer(function Search() {
  const changeHandler = (e: any) => {
    const {
      target: { value },
    } = e;

    Pokemons.search((x: any) =>
      value ? ExtractProperty(x).includes(Clean(value)) : false,
    );
    Pokemons.lookup = value || '';
  };

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current!.focus();
  }, [ref]);

  return (
    <Container data-testid='SearchContainer'>
      <Input placeholder={'Pokémon'} ref={ref} onChange={changeHandler} />
      <FontAwesomeIcon
        className='icon'
        icon={Pokemons.fetching ? faCog : faSearch}
        {...{ spin: Pokemons.fetching }}
      />
    </Container>
  );
});
