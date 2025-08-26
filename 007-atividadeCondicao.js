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

// Importa a biblioteca 'prompt-sync' para permitir a leitura de dados do usuário no terminal.
let entrada = require('prompt-sync')();

// Cria um array (lista) vazio para armazenar todas as mensagens de erro que possam ocorrer.
let mensagemErro = []; 

// Declara uma variável que guardará a resposta sobre ser amigo do dono como true ou false.
let validaAmigo;

// --- Interface do Usuário e Coleta de Dados ---

// Imprime um cabeçalho para o programa ficar mais organizado visualmente.
console.log         ('|-------------------------------------------------------|');
console.log         ('|                   Verificação de entrada                  |');
console.log         ('|-------------------------------------------------------|');

// Solicita o nome ao usuário e armazena a resposta na variável 'nome'.
let nome = entrada  ('|Digite seu nome:');
// Solicita a idade e armazena na variável 'idade'.
let idade = entrada ('|Digite sua idade:');
// Pergunta se é amigo do dono e armazena a resposta em 'amigo'.
let amigo = entrada ('|Você é amigo do dono do estabelecimento:');

console.log         ('|-------------------------------------------------------|');
console.log(''); // Imprime uma linha em branco para espaçamento.


// --- Bloco de Validação dos Dados ---

// Primeira verificação: checa se algum dos campos foi deixado em branco.
if (nome === '' || idade === '' || amigo === '') {
    // Se algum campo estiver vazio, adiciona uma mensagem de erro ao array 'mensagemErro'.
    mensagemErro.push('É necessário preencher todas as informações pedidas!');
}

// Segunda verificação: checa se a idade fornecida não é um número.
// A função isNaN() retorna true se o valor não for um número.
if (isNaN(idade)) {     
    // Se a idade não for um número, adiciona outra mensagem de erro.
    mensagemErro.push('A idade deve ser um número');
}

// Terceira verificação: valida a resposta sobre ser amigo do dono.
// Só executa se o campo 'amigo' não estiver vazio.
if (amigo !== '') {
    // Pega o primeiro caractere da resposta (ex: 'S' de "Sim"), converte para minúsculo
    // e verifica se não é 's' E também não é 'n'.
    if (amigo[0].toLowerCase() !== 's' && amigo[0].toLowerCase() !== 'n') {
        // Se a resposta for inválida, adiciona uma mensagem de erro.
        mensagemErro.push('Resposta para "amigo do dono" inválida. Responda com Sim ou Não.');
    } else {
        // Se a resposta for válida ('s' ou 'n'), converte para um valor booleano (true/false).
        // Isso é um operador ternário: se a condição for verdadeira, usa o valor antes do ':', senão, usa o valor depois.
        validaAmigo = amigo[0].toLowerCase() === 's' ? true : false;
    }
}

// --- Lógica Principal do Programa ---

// Verifica se o array 'mensagemErro' está vazio (ou seja, se não houve erros de validação).
if (mensagemErro.length === 0) { 
    // Se não houver erros, o programa continua.
    // Cria uma variável para construir a mensagem de resultado.
    let mensagemPrograma = '';

    // Regra 1: Acesso negado.
    // Se for menor de 18 E NÃO for amigo do dono.
    if (idade < 18 && validaAmigo === false) {       
        mensagemPrograma = 'Você não pode entrar.';
    }

    // Regra 2: Acesso permitido.
    // Se (for menor de 18 E for amigo do dono) OU (se for maior ou igual a 18).
    if ((idade < 18 && validaAmigo === true) || (idade >= 18)) {
        mensagemPrograma = 'Você pode entrar.';
    }

    // Regra 3: Bônus da bebida.
    // Se for maior ou igual a 18 E for amigo do dono.
    // Note que esta condição é ADICIONAL à de entrada.
    if (idade >= 18 && validaAmigo == true) {
        // Adiciona (concatena) o texto sobre a bebida à mensagem já existente.
        // '\n' cria uma nova linha.
        mensagemPrograma = mensagemPrograma + '\nE ganhou uma bebida.'
    }

    // Imprime a mensagem final construída para o usuário.
    console.log(mensagemPrograma);    
} else {
    // Se o array 'mensagemErro' tiver algum item, o programa executa este bloco.
    // Imprime a lista de todos os erros encontrados.
    console.log('Foram encontrados os seguintes erros:');
    console.log(mensagemErro);    
}