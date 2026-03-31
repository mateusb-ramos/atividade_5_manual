let idade = 18; // variável que guarda a idade da pessoa

if (idade >= 18) { // verifica se a idade é maior ou igual a 18
    console.log("Você é maior de idade."); // se for verdadeiro, mostra essa mensagem no console
}
//------------------------------------------------------------------------------------------------

let nota = 5; // variável que guarda a nota do aluno

if (nota >= 7) { // verifica se a nota é maior ou igual a 7
    console.log("Aprovado"); // se a condição for verdadeira, o aluno passou
} else { // caso a condição do if seja falsa
    console.log("Reprovado"); // executa esse bloco mostrando que o aluno reprovou
}
//------------------------------------------------------------------------------------------------

let dia = 2; // variável que representa um número do dia da semana

switch (dia) { // estrutura usada quando queremos comparar uma variável com vários valores possíveis
    case 1: // se o valor da variável dia for 1
        console.log("Domingo"); // mostra "Domingo" no console
        break; // break serve para parar o switch depois que encontra o caso correto

    case 2: // se o valor da variável dia for 2
        console.log("Segunda-feira"); // mostra "Segunda-feira"
        break; // interrompe o switch

    case 3: // se o valor da variável dia for 3
        console.log("Terça-feira"); // mostra "Terça-feira"
        break; // interrompe o switch

    default: // caso nenhum dos valores acima seja igual
        console.log("Outro dia"); // executa esse código como padrão
}
//------------------------------------------------------------------------------------------------
