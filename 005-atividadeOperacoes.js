/*
    Crie um programa que receba dois números e devolva
    como resultado a soma, subtração, a multiplicação 
    e a divisão do primeiro pelo segundo número.
*/

let entrada = require('prompt-sync')(); 

let n1 = entrada('Digite o 1º número: '); 
let n2 = entrada('Digite o 2º número: '); 

// let soma = parseInt(n1) + parseInt(n2); 
// let subtracao = parseInt(n1) - parseInt(n2); 
// let multiplicacao = parseInt(n1) * parseInt(n2); 
// let divisao = parseInt(n1) / parseInt(n2); 
// let resto = parseInt(n1) % parseInt(n2); 

let soma = parseFloat(n1) + parseFloat(n2); 
let subtracao = parseFloat(n1) - parseFloat(n2); 
let multiplicacao = parseFloat(n1) * parseFloat(n2); 
let divisao = parseFloat(n1) / parseFloat(n2); 
let resto = parseFloat(n1) % parseFloat(n2); 

console.log(`Resultado ${n1} + ${n2} = ${soma}`);
console.log(`Resultado ${n1} - ${n2} = ${subtracao}`);
console.log(`Resultado ${n1} * ${n2} = ${multiplicacao}`);
console.log(`Resultado ${n1} / ${n2} = ${divisao.toFixed(2)}`);
console.log(`Inteiro da divisão ${n1} / ${n2} = ${parseInt(divisao)}`);
console.log(`Resto da divisão ${n1} % ${n2} = ${resto}`);

entrada('Pressione "ENTER" para encerrrar o programa!');

console.log('Programa encerrado com sucesso!!!');

