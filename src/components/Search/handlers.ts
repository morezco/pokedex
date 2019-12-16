import { Pokemons } from 'store';
import { Clean, ExtractProperty } from 'shared/storeSearch';

export const changeHandler = (e: any) => {
  const {
    target: { value },
  } = e;

  Pokemons.search((x: any) =>
    value ? ExtractProperty(x).includes(Clean(value)) : false,
  );
  Pokemons.lookup = value || '';
};
