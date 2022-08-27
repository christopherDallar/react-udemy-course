import { getImagen } from './../../base-tests/11-async-await';

describe('Testing into File 11-async-await.test.js', () => {
  test('Should return picture url error, if not exist apiKey', async () => {
    const url = await getImagen();

    expect(url).toBe('No existe');
  });

  test('Should return picture url string', async () => {
    const url = await getImagen();

    expect(typeof url).toBe('string');
  });

  test('Should return picture url http://', async () => {
    const url = await getImagen();

    expect(url.includes('https://')).toBe(true);
  });
});
