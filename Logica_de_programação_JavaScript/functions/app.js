
function mostrarOlaMundo(){
   console.log("Ola mundo");
}

mostrarOlaMundo();

function mostrarNome(nome) {
    console.log(`Olá, ${nome}!`);
}
mostrarNome("Joao");

function dobrarNumero(numero) {
    return numero *2;
}
const resultadoDobro = dobrarNumero(5);
console.log(resultadoDobro);


function calcularMedia(numero1, numero2, numero3) {
    const soma = numero1 + numero2 + numero3;
    return soma / 3;
}

const media = calcularMedia(5, 10, 15);
console.log(media); 

function retornarMaior(numero1, numero2) {
    if (numero1 > numero2) {
        return numero1;
    } else {
        return numero2;
    }
}

const maiorNumero = retornarMaior(10, 20);
console.log(maiorNumero); 

function quadradoNumero(numero) {
    return numero * numero;
}

const resultadoQuadrado = quadradoNumero(4);
console.log(resultadoQuadrado); 
