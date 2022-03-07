import {
  getHeroeById,
  getHeroesByOwner,
} from '../../base-tests/08-imp-exp';
import heroes from './../../data/heroes';

describe('Testing into File 08-imp-exp.test.js', () => {
  test('getHeroeById', () => {
    const id = 1;
    const heroe = getHeroeById(id);

    const heroesData = heroes.find((h) => h.id === id);

    expect(heroe).toEqual(heroesData);
  });

  test('getHeroeById return undefined is not exist', () => {
    const id = 10;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });

  test('getHeroesByOwner return heroes by owner', () => {
    const owner = 'DC';
    const heroes = getHeroesByOwner(owner);

    const heroesData = heroes.filter(
      (h) => h.owner === owner,
    );

    expect(heroes).toEqual(heroesData);
  });

  test('getHeroesByOwner  to be 2 length', () => {
    const owner = 'Marvel';
    const heroes = getHeroesByOwner(owner);
    expect(heroes.length).toBe(2);
  });
});
