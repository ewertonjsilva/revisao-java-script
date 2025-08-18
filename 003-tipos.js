// Texto / String
let cidade = 'Tupã'; 

// Inteiro / Number
let populacao = 62000; 

// Decimal / Number 
let temperaturaMedia = 34.5;  

// Sim/Não / Boolean 
let temMCDonalds = true; 

// Undefined
let totalAnimaisRua; 

// Null 
let mortesPorTerremoto = null;

// Date
const fundacaoCidade = new Date('1929-10-12');
const dataCorreta = new Date(1929, 10, 12);
// console.log(fundacaoCidade); Saída: 1929-10-12

// Objeto 
let enderecoPrefeitura = {
    logradouro : 'Praça da Bandeira', 
    numero: 1, 
    complemento: null, 
    cep: '17600000', 
    fundacaoCidade: `${fundacaoCidade.getDate() + 1}/${fundacaoCidade.getMonth() + 1}/${fundacaoCidade.getFullYear()}`, 
    fundacaoDataFormatoCorreto: `${dataCorreta.getDate()}/${dataCorreta.getMonth()}/${dataCorreta.getFullYear()}` 
};

// Array 
let principaisAvenidas = ['Tamoios', 'Aimorés', 'Lélio Pizza']; 

// Função 
function ExibeDados() {
    console.log(`
        A cidade de ${cidade} tem ${populacao} habitantes. 
        A prefeitura fica localizada na ${enderecoPrefeitura.logradouro} nº ${enderecoPrefeitura.numero} - ${enderecoPrefeitura.cep}. 
        As principais avenidas são: ${principaisAvenidas[0]}, ${principaisAvenidas[1]} e ${principaisAvenidas[2]} 
        Data de fundação: ${enderecoPrefeitura.fundacaoDataFormatoCorreto}
    `);    
}

ExibeDados();