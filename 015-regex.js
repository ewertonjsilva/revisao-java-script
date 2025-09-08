let entrada = require('prompt-sync')();

let frase = entrada("Digite uma frase: ");
let frase2 = '';

const regexVogais = /[aeiouáéíóúàâêôãõüAEIOUÁÉÍÓÚÀÂÊÔÃÕÜ]/;

let contador = -1;

while (contador < frase.length) {
    contador++;
    if (regexVogais.test(frase[contador])) {
        continue;
    }
    if (frase[contador] == ' ') {        
        continue;
    }

    frase2 = frase2 + frase.charAt(contador);
}

console.log(frase2);

