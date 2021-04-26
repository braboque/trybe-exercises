
let n = 5;
let symbol = '*';
let inputLine = '';

//atribui * e linha 5 vezes ao inputline
for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  inputLine = inputLine + symbol;
};

//manda imprimir 5 vezes o valor atribuído aao inputline
for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  console.log(inputLine);
};