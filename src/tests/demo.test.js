/* eslint-disable no-undef */

describe('Testing into File demo.test.js', () => {
  test('Have to be equals', () => {
    // 1. Arrange - Initialization
    const message = 'Hello world';

    // 2. Act - Estimulo
    const message2 = `Hello world`;

    // 3. Assert - Observar comportamiento con una validación
    expect(message2).toBe(message);
  });
});
