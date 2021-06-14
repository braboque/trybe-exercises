//A função sum(a, b) retorna a soma do parâmetro a com o b
//Teste se o retorno de sum(4, 5) é 9
//Teste se o retorno de sum(0, 0) é 0
//Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
//Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

const sum = (a, b) => a + b;

test('Testa se a soma dos valores é igual a 9', () => {
  expect(sum(4, 5)).toBe(9);
});

test('Testa se os parametros de entrada 0 retorno será 0', () => {
expect(sum(0, 0)).toBe(0);
});

test('Testa se os parametros são numeros', () => {
expect(sum(4, '5')).toMatch(9);
});
