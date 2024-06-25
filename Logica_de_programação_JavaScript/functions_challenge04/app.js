
function calcIMC(peso,altura) {
    const imc = peso / (altura * altura);
    return imc;
}

const imc = calcIMC(70, 1.75);
console.log(`O IMC é ${imc}`);

function calcFatorial(numero) {
    if(numero === 0 || numero === 1){
        return 1;
    }
    let fatorial = 1;
    for (let i = 2; i <= numero; i++){
        fatorial *=i;
    }
    return fatorial;
}

const fatorial = calcFatorial(7);
console.log(`O fatorial é ${fatorial}`);

function usdtobrl (dolar) {
    const taxaCambio = 5.40;
    const valorBRL = dolar * taxaCambio
    return valorBRL;
}

const valorBRL = usdtobrl(700);
console.log(`O valor em reais é R$${valorBRL}`);


function calcRetangular (altura2, largura){
    const area = altura2 * largura;
    const perimentro = 2 * (altura2 + largura);
    console.log(`Area é ${area} m2`);
    console.log(`Perimetro é ${perimentro} m`);
}

calcRetangular(5,10);

function caclCircular(raio) {
    const pi = 3.14;
    const area = pi * (raio * raio);
    const perimentro = 2 * pi * raio;
    console.log(`Area ${area} m2`);
    console.log(`Perimentro: ${perimentro} m`);
}


function mostrarTabuada(numero){
    console.log(`Tabuada do ${numero}:`);
    for(let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * 1}`);
    }
}

mostrarTabuada(7);