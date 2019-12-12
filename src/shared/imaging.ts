export const pkdb = (pokemon: string = 'pikachu') =>
  `https://img.pokemondb.net/artwork/${pokemon.toLowerCase()}.jpg`;

export const itemdb = (item: string) =>
  `https://img.pokemondb.net/sprites/items/${item.toLowerCase()}.png`;
