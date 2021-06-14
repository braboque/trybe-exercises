//Teste se o retorno de sum(0, 0) é 0

const sum = (a, b) => a + b;

test('sums two values', () => {
  expect(sum(0, 0)).toEqual(0);
});

