import React, { useRef, useEffect } from 'react';
import { observer } from 'mobx-react';

import { Container, Input } from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCog } from '@fortawesome/free-solid-svg-icons';

import { Pokemons } from 'store';

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

    Pokemons.search((x: any) =>
      value ? ExtractProperty(x).includes(Clean(value)) : false,
    );
    Pokemons.lookup = value || '';
  };

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current!.focus();
  }, [ref]);

  useEffect(() => {
    if (window.scrollY < 500) {
      const step = (i: number) => {
        if (i) {
          window.scrollTo(0, window.scrollY + i);
          window.requestAnimationFrame(step.bind(undefined, i - 1));
        }
      };
      window.requestAnimationFrame(step.bind(undefined, 33));
    }
  }, [Pokemons.lookup]);

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
