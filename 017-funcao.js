let entrada = require('prompt-sync')();

// exemplo de função que não retorna valor
function olaUsuario(pNome) {
    console.log(`Olá ${pNome}, seja bem vindo(a)!`);
}

// exemplo de função que retorna valor
function loginUsuario(pUsuario, pSenha) {
    if (pUsuario == 'admin' && pSenha == '1234') {
        return true;    
    } else {
        return false;
    }
}

const usuario = entrada('Digite seu usuário: '); 
const senha = entrada('Digite sua senha: ');

if (loginUsuario(usuario, senha)) {
    let nome = entrada('Digite seu nome: '); 
    olaUsuario(nome);    
} else {
    console.log('Usuário ou senha inválidos!');    
}



