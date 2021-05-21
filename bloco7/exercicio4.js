const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60, 
  },
};

const customerInfo = (order) => Object.values(order); 
  // Adicione abaixo as informações necessárias.
  
  
console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para ${order.name}, Telefone:${order.phoneNumber}, 
${order.address.street}, Nº:${order.address.number}, AP:${order.address.apartment}.`);

customerInfo(order);

const orderModifier = (order) => Object.values(order);
  // Adicione abaixo as informações necessárias.

  order.name = 'Luis Silva';
  order.payment = '50';
  let newPizzas = {'mussarela':60, 'calabresa':50}
  Object.assign(order.order.pizza, newPizzas);

console.log(`Olá ${order.name}, o total do seu pedido de ${order.order.pizza.mussarela}, calabresa e Coca-Cola Zero é R$ 50,00.`)

orderModifier(order);