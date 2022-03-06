/* eslint-disable no-undef */

import { retornaArreglo } from '../../base-tests/07-deses-arr';

describe('Testing into File 07-deses-arr.test.js', () => {
  test('retornaArreglo() Function should an Array', () => {
    const [letters, numbers] = retornaArreglo(); // ['ABC', 123];

    const arrTest = ['ABC', 123];

    // expect(arr).toEqual(arrTest); //works
    expect(letters).toBe('ABC');
    expect(typeof letters).toBe('string');

    expect(numbers).toBe(123);
    expect(typeof numbers).toBe('number'); // Ejemplo porque el anterior ya valida que sea un numero
  });
});
