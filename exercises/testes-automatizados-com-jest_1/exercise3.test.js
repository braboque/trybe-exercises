const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parametros tem que ser numeros');
  }

  return a + b;
}

// implemente seus testes aqui