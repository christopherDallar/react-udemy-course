test('This is my first test - have to be TRUE', () => {
  const isActive = true;

  if (isActive) {
    throw new Error('Is not active');
  }
});
