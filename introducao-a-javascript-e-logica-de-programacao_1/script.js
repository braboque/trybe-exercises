//Questão 01 Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:

//Declaração das variáveis A e B
let A = 10;
let B = 20;

//Soma

let Soma = A + B;
console.log(Soma);

//Subtração

let Sub = A - B;
console.log(Sub);

//Multiplicação
let Mult = A * B;
console.log(Mult);

//Divisão
let Div = A/B;
console.log(Div);

//Módulo
let Modulo = A % B;
console.log(Modulo);

//Questão 2 Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.

let A = 10;
let B = 10;
 if(A > B){
    console.log('A é Maior que B');
    }
        else if(A === B){
         console.log('A é igual a B.');
     
    }

    else{
        console.log('B é Maior que A');
    }

//Questão 03. Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

let A = 10;
let B = 20;
let C = 50;

if((A > B) && (A > C)){
    console.log('A é maior');
}
else if((B > A)&&(B > C)){
    console.log('B maior que A e C');

}
else{
   console.log('C é maior que A e B'); 
}

//Questão 04. Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
let pecaDeXadrez = 'bispo';

switch (pecaDeXadrez.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
};

//Questão 07. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

let porcentagem = 105;
if(porcentagem >= 90 && porcentagem <= 100){
    console.log('Conceito A');
}
else if(porcentagem >= 80 && porcentagem <= 90){
    console.log('Conceito B');
}

else if(porcentagem >= 70 && porcentagem <= 80){
    console.log('Conceito C');
}

else if(porcentagem >= 60 && porcentagem <= 70){
    console.log('Conceito D');

}
else if(porcentagem >= 50 && porcentagem <= 60){
    console.log('Conceito E');
}
else if(porcentagem < 50){
    console.log('Conceito F');
}
else if(porcentagem < 0){
    console.log('Erro');
    
}
else if(porcentagem > 100 || porcentagem < 0){
    console.log('Erro');

}
 else
 console.log('Erro')


 //Questão 08. Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
 let a = 2;
 let b;
 let c;
 if((a % 2 == 0) || (b % 2 == 0) || (c % 2 == 0)){
    console.log('um dos 3 é par');
 }
    else{
    console.log('Das três variáveis uma é ímpar');
 
 }

 //Questão 09. Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
 let a = 3;
 let b = 4;
 let c = 6;
 if((a % 2 != 0) || (b % 2 != 0) || (c % 2 != 0)){
    console.log('um dos 3 é ímpar');
 }
    else{
    console.log('Das três variáveis uma é par');
 
 }

 //Questão 10. Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
 let valorCusto = 80;
 let valorVenda = 180;
 //impostoSobreOCusto = 20/100;
 valorCustoTotal = valorCusto + valorCusto * 20/100;
 lucro = valorVenda - valorCustoTotal;
 console.log (lucro * 1000);


 //Questão 11.A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:


 let aliquotINSS;
 let aliquotIR;
 
 let salarioBruto = 2000.00;
 //Cálculo da aliquota do INSS
 if (salarioBruto <= 1556.94) {
   aliquotINSS = salarioBruto * 0.08;
 } else if (salarioBruto <= 2594.92) {
   aliquotINSS = salarioBruto * 0.09;
 } else if (salarioBruto <= 5189.82) {
   aliquotINSS = salarioBruto * 0.11;
 } else {
   aliquotINSS = 570.88;
 }
 //Cálculo do salário líquido
 let salarioLiquido = salarioBruto - aliquotINSS;
 //Cálculo da aliquota do IR
 if (salarioLiquido <= 1903.98) {
   aliquotIR = 0;
 } else if (salarioLiquido <= 2826.65) {
   aliquotIR = (salarioLiquido * 0.075) - 142.80;
 } else if (salarioLiquido <= 3751.05) {
   aliquotIR = (salarioLiquido * 0.15) - 354.80;
 } else if (salarioLiquido <= 4664.68) {
   aliquotIR = (salarioLiquido * 0.225) - 636.13;
 } else {
   aliquotIR = (salarioLiquido * 0.275) - 869.36;
 };
 
 console.log("Salário: " + salarioLiquido - aliquotIR, 'Você paga ' ,aliquotINSS ,'ao INSS e ', aliquotIR, 'ao IR.');


 
