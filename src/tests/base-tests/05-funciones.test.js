/* eslint-disable no-undef */
import {
  getUser,
  getUsuarioActivo,
} from '../../base-tests/05-funciones';

describe('Testing into File 05-funciones.test.js', () => {
  test('getUser Function should an Object', () => {
    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502',
    };

    const user = getUser();

    expect(user).toEqual(userTest); // Para comparar las propiedades de un objeto
  });

  test('getUsuarioActivo Function should an Object', () => {
    const user = getUsuarioActivo('Christopher');

    const userTest = {
      uid: 'ABC567',
      username: 'Christopher',
    };

    expect(user).toEqual(userTest); // Para comparar las propiedades de un objeto
  });
});
