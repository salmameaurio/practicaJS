//Arrange
nroAnterior=4;
nroActual=5;
//act
//Assert
1<=nroActual<=10;
nroActual=nroAnterior+1;
nroAnterior=nroActual-1;
test('the number is between 1 to 10', () => {
    expect(nroActual).toBe(nroAnterior+1);
    expect(nroActual).toBeGreaterThanOrEqual(1);
    expect(nroActual).toBeLessThan(10);
  });