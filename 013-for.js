let entrada = require('prompt-sync')();

let tabuada = entrada("Digite um número para ver a tabuada: ");

for (let contador = 1; contador <= 10; contador++) {
    console.log(`${tabuada} X ${contador} = ${parseInt(tabuada * contador)}`);        
}

