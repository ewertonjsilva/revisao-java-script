let entrada = require('prompt-sync')();

let nome = entrada('Digite seu nome: '); 
let idade = entrada('Digite sua idade: '); 

let validaIdade = isNaN(idade);

if (validaIdade) {
    console.log(`${nome} insira um valor numérico na idade!`);
} else{
    if (idade > 18) {
        console.log('Bem-vindo ao site.');        
    } else if (idade < 18) {
        console.log('Você não tem idade para acessar o site.');        
    } else {
        console.log('Ok você tem 18 anos.');
    }
}

