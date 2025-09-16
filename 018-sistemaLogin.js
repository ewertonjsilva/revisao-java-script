let entrada = require('prompt-sync')();

let usuarios = [
    { usuario: 'admin', senha: '1234', nome: 'Administrador' },
    { usuario: 'jose', senha: 'abcd', nome: 'José da Silva' },
    { usuario: 'maria', senha: 'xyz', nome: 'Maria de Souza' }
];

// exemplo de função que não retorna valor
function olaUsuario(pNome) {
    console.log(`Olá ${pNome}, seja bem vindo(a)!`);
}

// exemplo de função que retorna valor
function loginUsuario(pUsuario, pSenha) {
    let logado = false
    let i = 0
    for (i ; i < usuarios.length; i++) {
        if (pUsuario == usuarios[i].usuario && pSenha == usuarios[i].senha) {
            logado = true;
            break;
        }
    }
    if (logado) {
        return { sucesso: true, txtRetorno: usuarios[i].nome };
    } else {
        return { sucesso: false, txtRetorno: 'Usuário ou senha inválidos!' };
    }
}

const usuario = entrada('Digite seu usuário: ');
const senha = entrada('Digite sua senha: ');

const retorno = loginUsuario(usuario, senha);

if (retorno.sucesso) {
    let nome = retorno.txtRetorno;
    olaUsuario(nome);
} else {
    console.log(retorno.txtRetorno);
}



