import { getHeroeByIdAsync } from './../../base-tests/09-promesas';
import heroes from './../../data/heroes';

describe('Testing into File 09-promesas.test.js', () => {
  test('Should return Heroe Async', (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toBe(heroes[0]);
      done(); //Always call done
    });
  });

  test('Should return error if Heroe not exist', (done) => {
    const id = 10;

    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe('No se pudo encontrar el héroe');
      done(); //Always call done
    });
  });
});
