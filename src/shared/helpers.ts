/**
 * Gets an array of numbers, and returns the sum of its contents.
 * @param array An array of numbers.
 * @param mod An optional modifier function.
 */
export const Sum = (
  array: Array<number>,
  mod: Function = (x: Array<Number>) => x,
) => {
  let res = 0;
  for (let i = 0; i < array.length; i++) {
    res += array[i];
  }
  return mod(res);
};

/**
 * Gets a URL ending with a PokéAPI pokemon ID and returns the ID.
 * @param from An URL that ends with a pokemon ID.
 */
export const extractId = (from: URL | string) => {
  if (!(from instanceof URL)) {
    from = new URL(from);
  }
  const arr = from.href.split('/');
  return arr[arr.length - 2];
};
