
document.querySelector('h1').textContent = 'Hora do desafio'

function mostrarMSG(){
    console.log('O botao foi clicado');
}
document.getElementById('console').addEventListener('click', mostrarMSG);


function mostrarAlerta(){
    alert('Eu amo JS');
}

document.getElementById('alerta').addEventListener('click', mostrarAlerta );


function askCity(){
    const city = prompt('Escreva o nome de uma cidade no Brasil: ');
    if (city) {
        alert(`Estive em ${city} e lembrei de você`);
    }
}

document.getElementById('proomt').addEventListener('click', askCity);


function somaNumeros(){
    const numero1 = parseInt(prompt("Escreva o primeiro numero inteiro: "), 10);
    const numero2 = parseInt(prompt("Escreva o segundo numero inteiro:  "), 10);
    if(!isNaN(numero1) && !isNaN(numero2)){
        const soma = numero1 + numero2;
        alert('O resultado da soma é ${soma}');
    }else {
        alert('Por favor, insira números inteiros válidos. ');
    }
}

document.getElementById('soma').addEventListener('click', somaNumeros);





