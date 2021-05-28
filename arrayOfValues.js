const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((element) => {
  console.log('Cada elemento do array:', element);
});

// Cada elemento do array: josé
// Cada elemento do array: 50
// Cada elemento do array: 0.25
// Cada elemento do array: { comida: 'Chocolate' }


meuArray = ['2', '20', '30', '60'];

meuArray.forEach((elemento) => {
    if (elemento % 2 === 0) {
      console.log(`${elemento} é divísivel por 2!`);
    }
  });