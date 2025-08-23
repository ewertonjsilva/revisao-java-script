/*
    Crie um programa de um estabelecimento que receba dados como 
    o nome, a idade e se a pessoa é amigo do dono. 
    Retorne uma mensagem de acordo com as validações abaixo: 
    - Se a pessoa ter mais de 18 ano o acesso ao local será liberado. 
    - Pessoas com menos de 18 não acessam o local. 
    - Amigos do dono podem acessar o local independente da idade. 
    - Caso a pessoa tenha mais de 18 anos e seja amigo do dono, ganhara
    uma bebida.    
*/

let entrada = require('prompt-sync')();

console.log('Verificação de entrada');
let nome = entrada('Digite seu nome: '); 
let idade = entrada('Digite sua idade: '); 
let amigo = entrada('Você é amigo do dono do estabelecimento: ');

if (nome === '' || idade === '' || amigo === '') {
    console.log('É necessário preencher todas as informações pedidas!');    
} else if (isNaN(idade)) {
    console.log('A idade deve ser um número');    
} else if (amigo.toLowerCase() !== 'sim' && amigo.toLowerCase() !== 'nao' && amigo.toLowerCase() !== 's' && amigo.toLowerCase() !== 'n') {
        console.log('Erro amigo' + amigo.toLocaleLowerCase);        
} else {
    console.log('Começa o programa');    
}