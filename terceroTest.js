valor=Math.floor(Math.random()*(37-0)+0);
spin=Math.floor(Math.random()*(11-5)+5);
num=spin*37+valor;
x=num%37;
test('value expected to be greater or equal to 0', () => {
    expect(num).toBeGreaterThanOrEqual(0);
  });

test('value expected to be greater or equal to 36', () => {
    expect(num).toBeGreaterThanOrEqual(36);
  });