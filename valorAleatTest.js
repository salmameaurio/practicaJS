
spin=Math.floor(Math.random()*(11-5)+5);
test('value expected to be equal or greater than 37*5', () => {
    expect(spin).toBeGreaterThanOrEqual(37*5);
  });

test('value expected to be less than or equal to 36', () => {
    expect(spin).toBeLessThanOrEqual(37*10);
  });