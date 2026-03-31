for (let i = 1; i <= 5; i++) { // estrutura de repetição "for", usada quando sabemos quantas vezes o código vai repetir
    console.log("Número: " + i); // mostra no console o texto "Número:" junto com o valor atual da variável i
} // a variável i começa em 1, o laço continua enquanto i for menor ou igual a 5, e aumenta 1 a cada repetição
//---------------------------------------------------------------------

let i = 1; // cria a variável i começando com valor 1

while (i <= 5) { // estrutura de repetição "while", repete o código enquanto uma condição lógica for verdadeira
    console.log("Número: " + i); // mostra no console o número atual da variável i
    i++; // aumenta 1 no i a cada repetição pra evitar loop infinito
} // o laço vai parar quando i ficar maior que 5(condição lógica no caso)
