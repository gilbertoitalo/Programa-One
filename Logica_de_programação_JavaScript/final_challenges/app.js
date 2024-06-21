


// 1. Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.

console.log("Boas vindas")

// 2. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador. 
let nome = "Julia";
console.log("Olá, " + nome + "!");

// 3.Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" . 
let nome2 = "Julia";
alert("Olá, " + nome + "!");
// 4. Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

let linguagemPreferida = prompt("Qual a linguagem de programação que você mais gosta?");
console.log("A linguagem de programação preferida é: " + linguagemPreferida);

// Soma de dois valores
let valor1 = 10;
let valor2 = 5;
let resultadoSoma = valor1 + valor2;
console.log("A soma de " + valor1 + " e " + valor2 + " é igual a " + resultadoSoma);

// Subtração de dois valores
let valor3 = 15;
let valor4 = 7;
let resultadoSubtracao = valor1 - valor2;
console.log("A diferença entre " + valor1 + " e " + valor2 + " é igual a " + resultadoSubtracao);

// Verificação de maioridade
let idade = prompt("Insira sua idade:");
if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

// Verificação de número positivo, negativo ou zero
let numero = prompt("Insira um número:");
if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

// Loop para imprimir números de 1 a 10
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// Verificação de nota e exibição de status
let nota = 8;
if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

// Número aleatório entre 0 e 1
let numeroAleatorio = Math.random();
console.log("Número aleatório entre 0 e 1: " + numeroAleatorio);

// Número aleatório entre 1 e 10
let numeroAleatorio10 = Math.floor(Math.random() * 10) + 1;
console.log("Número aleatório entre 1 e 10: " + numeroAleatorio10);

// Número aleatório entre 1 e 1000
let numeroAleatorio1000 = Math.floor(Math.random() * 1000) + 1;
console.log("Número aleatório entre 1 e 1000: " + numeroAleatorio1000);