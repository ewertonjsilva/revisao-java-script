/*
    Crie um programa que receba dois número 
    e apresente a contagem de primeiro número até 
    o segundo. Caso o segundo número seja maior
    a contagem deve ser decrescente. 
    Trate também possíveis erros nos valores 
    digitados.
*/

let entrada = require('prompt-sync')();

console.log('PROGRAMA QUE CONTA');
console.log('');

let num1 = entrada('Digite 1º número: ');
let num2 = entrada('Digite 2º número: ');
console.log('');

let erro = [];

if (num1 == '' || num2 == '') {
    erro.push('Nenhum valor pode ser vazio');
} else if (isNaN(num1) || isNaN(num2)) {
    erro.push('O valor digitado deve ser numérico');
} else {
    if (num1 === num2) {
        erro.push('Os número digitados são iguais!');
    }
}

if (num1.length > 4 || num1.length > 4) {
    erro.push('O número está muito grande');
}

if (erro.length > 0) {
    erro.forEach(mensagem => {
        console.log(mensagem);
    });
} else {
    let cont = 0;
    if (num1 < num2){
        cont = num1;
        while (cont <= num2) {
            console.log(cont); 
            cont++;           
        }
    }
}

console.log('');
entrada('Pressione Enter para encerrar o programa!');
