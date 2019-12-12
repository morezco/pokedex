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
