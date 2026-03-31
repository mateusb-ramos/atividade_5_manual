var nome = "Mateus"; //variável
console.log(nome); //Saída: Mateus
//cria uma variável.
//--------------------------------------------------------------------------------------------------------------------

let idade = 16;
console.log(idade);
//também cria uma variável, mas respeita melhor o escopo de bloco.
//--------------------------------------------------------------------------------------------------------------------

const pi = 3.14;
console.log(pi);
//cria uma constante (valor não pode ser alterado depois.)
//--------------------------------------------------------------------------------------------------------------------
var mensagem = "Olá";

if (true) {
    var mensagem = "Oi";
}

console.log(mensagem); 
// A variável é acessível fora do bloco porque "var" não respeita escopo de bloco.
//--------------------------------------------------------------------------------------------------------------------

if (true) {
    let numero = 10;
}

console.log(numero); 
// variável foi criada com "let" dentro do bloco e não existe fora dele.
//--------------------------------------------------------------------------------------------------------------------

if (true) {
    let teste = "Dentro do bloco";
}

// Tentando usar fora do bloco
console.log(teste); 

// Isso gera erro porque "teste" foi criada com "let"
// e só existe dentro das chaves { } onde foi declarada.
//--------------------------------------------------------------------------------------------------------------------
