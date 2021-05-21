// const customer = {
//   firstName: 'Roberto',
//   lastName: 'Faria', // Propriedade adicionada.
//   age: 22,
//   job: 'Teacher',
// };
// console.log(customer);

// customer.lastname = 'Richards';
// console.log(customer);


// const customer1 = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };
  
//   console.log(customer1);
  
//   customer1.lastName = 'Faria';
//   console.log(customer1);
  
//   const customer2 = {
//     firstName: 'Maria',
//     age: 23,
//     job: 'Medic',
//   };
  
//   console.log(customer2);
//   customer2['lastName'] = 'Silva';
//   console.log(customer2);

//Agora, para praticar, crie uma função que receba três parâmetros, 
//sendo eles: um objeto, o nome de uma chave e o seu valor. 
//O retorno dessa função deve ser o objeto
//já com a nova chave adicionada nele.

const cliente1 = {
    Nome: 'Luis',
    Sobrenome: 'Santos',
    Idade: '45',
  };

// //com o for
// const recebeObjeto = (cliente) => {
//     const arrayObjeto = Object.keys(cliente);
//     for(index in arrayObjeto){
//         console.log(`${arrayObjeto[index]}: ${cliente[arrayObjeto[index]]}`)
//     }
// };
// console.log('Cliente1');
// recebeObjeto(cliente1);

//sem o for
const recebeObjeto = (cliente) => Object.values(cliente);
console.log(cliente1);