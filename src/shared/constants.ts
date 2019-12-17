declare const global: any;

export const TESTING = typeof global.it !== 'function';

export const Categories = [
  'Pokémon',
  'Berries',
  'Contests',
  'Encounters',
  'Evolution',
  'Games',
  'Items',
  'Locations',
  'Machines',
  'Moves',
];

export const Subtitles: any = {
  Pokémon:
    'Pokémon are creatures of all shapes and sizes who live in the wild or alongside humans. For the most part, Pokémon do not speak except to utter their names. During their adventures, Pokémon grow and become more experienced and even, on occasion, evolve into stronger Pokémon. There are currently more than 700 creatures that inhabit the Pokémon universe.',
  Berries:
    'Berries are small fruits that can provide HP and status condition restoration, stat enhancement, and even damage negation when eaten by Pokémon.',
  Contests:
    "Contest types are categories judges used to weigh a Pokémon's condition in Pokémon contests.",
  Encounters:
    'Methods by which the player might can encounter Pokémon in the wild, e.g., walking in tall grass.',
  Evolution:
    'Evolution chains are essentially family trees. They start with the lowest stage within a family and detail evolution conditions for each as well as Pokémon they can evolve into up through the hierarchy.',
  Games:
    'A generation is a grouping of the Pokémon games that separates them based on the Pokémon they include. In each generation, a new set of Pokémon, Moves, Abilities and Types that did not exist in the previous generation are released.',
  Items:
    'An item is an object in the games which the player can pick up, keep in their bag, and use in some manner. They have various uses, including healing, powering up, helping catch Pokémon, or to access a new area.',
  Locations:
    'Locations that can be visited within the games. Locations make up sizable portions of regions, like cities or routes.',
  Machines:
    'Machines are the representation of items that teach moves to Pokémon. They vary from version to version, so it is not certain that one specific TM or HM corresponds to a single Machine.',
  Moves:
    'Moves are the skills of Pokémon in battle. In battle, a Pokémon uses one move each turn. Some moves (including those learned by Hidden Machine) can be used outside of battle as well, usually for the purpose of removing obstacles or exploring new areas.',
  Intro:
    "The Pokémon series has had eight generational groups of games, spanning across nearly three decades and still ongoing. In this website, you'll find a knowledge base for all of your Pokémon needs.",
};

/**
 * Gets a PokéAPI pokemon ID and returns the full GitHub URL for its sprite.
 * @param id A pokemon ID from PokéAPI.
 */
export const spriteURL = (id: string): string =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

/**
 * Gets an HD image of the specified pokemon from pokemondb.
 * Warning: may not work on corporate networks.
 * @param pokemon The pokemon's name
 */
export const pictureURL = (pokemon: string): string =>
  `https://img.pokemondb.net/artwork/${pokemon.toLowerCase()}.jpg`;

export interface LayoutProps {
  scrollEffects: boolean;
  setMinimiseNav: Function;
}
