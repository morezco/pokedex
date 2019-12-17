export const pkdb = (pokemon: string = 'pikachu') =>
  `https://img.pokemondb.net/artwork/${String(pokemon!).toLowerCase()}.jpg`;
