//
let tasksList = ['Tomar café', 'Reunião', 
            'Brincar com o cachorro'];

console.log(tasksList.length);

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
// Tomar café

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);
// Brincar com o cachorro

tasksList.push('Fazer exercicios da Trybe');
console.log(tasksList);

let indexOfTask = tasksList.indexOf('Reunião');
console.log(indexOfTask);