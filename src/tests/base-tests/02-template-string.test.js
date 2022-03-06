// import '@testing-library/jest-dom';
import { getSaludo } from '../../base-tests/02-template-string';

describe('Testing into File 02-template-string.test.js', () => {
  test('getSaludo Function should to return hola ${name}!', () => {
    const name = 'Dallar';

    const regard = getSaludo(name);

    expect(regard).toBe('Hola ' + name + '!');
  });

  test('getSaludo Function should to return hola Carlos!', () => {
    const regard = getSaludo();

    expect(regard).toBe('Hola Carlos!');
  });
});
