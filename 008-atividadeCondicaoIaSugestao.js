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

const entrada = require('prompt-sync')();
const erros = []; 

// --- Interface do Usuário e Coleta de Dados ---
console.log('|-------------------------------------------------------|');
console.log('|                   Verificação de entrada                  |');
console.log('|-------------------------------------------------------|');

const nome = entrada('|Digite seu nome: ');
const idadeInput = entrada('|Digite sua idade: ');
const amigoInput = entrada('|Você é amigo do dono do estabelecimento (S/N): ');

console.log('|-------------------------------------------------------|');
console.log('');

// --- Bloco de Validação Centralizado ---

// 1. Converte e valida a idade
const idade = parseInt(idadeInput);
if (isNaN(idade)) {
    erros.push('A idade deve ser um número válido.');
}

// 2. Valida campos vazios
if (!nome || !idadeInput || !amigoInput) { // !nome é o mesmo que nome === ''
    erros.push('É necessário preencher todas as informações pedidas!');
}

// 3. Valida e converte a resposta 'amigo'
let eAmigo = null;
if (amigoInput) { // Só valida se não for vazio
    const primeiraLetra = amigoInput[0].toLowerCase();
    if (primeiraLetra !== 's' && primeiraLetra !== 'n') {
        erros.push('Resposta para "amigo do dono" inválida. Responda com Sim ou Não.');
    } else {
        eAmigo = primeiraLetra === 's';
    }
}

// --- Lógica Principal do Programa ---

// Verifica se o array de erros está vazio
if (erros.length === 0) {
    const podeEntrar = idade >= 18 || eAmigo;

    if (podeEntrar) {
        let mensagem = 'Você pode entrar.';
        
        const ganhaBebida = idade >= 18 && eAmigo;
        if (ganhaBebida) {
            mensagem += '\nE ganhou uma bebida.';
        }
        console.log(mensagem);

    } else {
        console.log('Você não pode entrar.');
    }
} else {
    // Imprime os erros de forma mais legível
    console.log('Foram encontrados os seguintes erros:');
    erros.forEach(erro => console.log(`- ${erro}`));
}