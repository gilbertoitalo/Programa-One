
// Pergunte ao usuário qual é o dia da semana. 
// Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". 
// Caso contrário, mostre "Boa semana!

let weekDay = prompt('Qual o dia da semana')

if (weekDay == 'Sabado' || weekDay == 'Domingo') {
    alert('have nice weekend!')
} else {
    alert('Have good week!')
}

// Verifique se um numero digitado pelo usuer é positivo ou negativo

let numer = prompt('Digite um numero')

if (numer > 0){
    alert("O numero digitado é positvo")
} else if (numero < 0){
    alert('o numero é negativo')
} else{
    alert("O numero digitado é zero, portanto é neutro.")
  }  


// Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

let pontuacao = 85 

if(pontuacao >=100) {
    console.log('Parabens, você venceu')
} else{
    console.log('Tente novamente para ganhar')
}

// Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

let saldo = 1500

let msg = 'Seu saldo atual e de ${saldo}'

console.log(msg)

// Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

let userNome = prompt('Insira seu nome')

alert('Bem vindo, ${userNome}!')

// Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

let contador = 1

while (contador <= 11) {
    console.log(contador)
    contador++ 
}

// Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número

let contador2 = 10

while (contador2 <= 0) {
    console.log(contador2)
    contador2--
}
 
// Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

let numero3 = parseInt(prompt('Digite um numero para a contagem regressiva: '))

while (numero3 >=0) {
    console.log(numero3)
    numero3--
}

// Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

let numero4 = parseInt(prompt('Digite um número para a contagem progressiva:'));

let contador4 = 0;

while (contador4<= numero4) {
    console.log(contador4);
    contador4++;
}