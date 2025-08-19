let entrada = require('prompt-sync')(); 

let n1 = entrada('Digite o 1º número: '); 
let n2 = entrada('Digite o 2º número: '); 

let soma = parseInt(n1) + parseInt(n2); 

console.log(`Resultado = ${soma}`);


entrada('Pressione "ENTER" para encerrrar o programa!');

console.log('Programa encerrado com sucesso!!!');
