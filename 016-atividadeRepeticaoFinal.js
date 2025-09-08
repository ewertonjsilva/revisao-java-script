/*

    crie um programa que peça ao usuário um valor 
    inicial e um valor final para gerar tabuadas 
    do valor inicial até o final

*/

let entrada = require('prompt-sync')();

let nInicial = entrada('Digite o número da primeira tabuada que quer visualizar: '); 
let nFinal = entrada('Digite o número da última tabuada que quer visualizar: '); 

for (let i = parseInt(nInicial); i <= parseInt(nFinal); i++) {
    console.log(`TABUADA DO ${i}`);    
    for (let index = 1; index <= 10; index++) {
        console.log(`${i} X ${index} = ${parseInt(i * index)}`);           
    }
    console.log('');    
}
