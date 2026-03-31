// Declaração de uma função 
function saudacao() {
    console.log("Olá, seja bem-vindo!");
}
//------------------------------------------------------------------------------------------------

// Chamando a função
saudacao();

//------------------------------------------------------------------------------------------------

// Função sem parâmetro
function mostrarMensagem() {
    console.log("Esta é uma função sem parâmetro.");
}
mostrarMensagem();

//------------------------------------------------------------------------------------------------

// Função com parâmetro
function saudacaoNome(nome) {
    console.log("Olá " + nome + "!");
}

// passando um valor pra função
saudacaoNome("Mateus");

//------------------------------------------------------------------------------------------------

function somar(a, b) {
    // Soma os dois valores recebidos
    let resultado = a + b;

    // resultado da soma
    return resultado;
}

// Chamando a função e guardando em uma variável
let total = somar(5, 3);

// Mostrando o resultado no console
console.log(total);
