//Desafio 1
let IMC = parseInt(calculoIMC(1.84, 81));

function calculoIMC(altura, peso) {
    return peso / (altura * altura);
}
console.log(IMC + ' kg/m2.');

//Desafio 2
function calculoFatoração(numeroFatoracao) {
    let resultado = numeroFatoracao
    for (let i = 1; i < numeroFatoracao; i++) {
        resultado *= i;
    }
    return console.log(resultado);
}
let numberFatoracao = 7;
calculoFatoração(numberFatoracao);

//Desafio 3
function converterValor(dolar) {
    cotacaoDolar = 4.80;
    conversaoR$ = dolar * cotacaoDolar;
    return conversaoR$.toFixed(2);
}
let valorEmDolar = 70;
let valorEmReais = converterValor(valorEmDolar);
console.log(`Valor de $${valorEmDolar} é equivalente à R$${valorEmReais}.`);

//Desafio 4
function calculoPerimetroEArea(altura, largura) {
    let perimetro = (altura * 2) + (largura * 2);
    let area = altura * largura;

    console.log(`Área da sala: ${area} metros quadrados`);
    console.log(`Perímetro da sala: ${perimetro} metros`);
}
let altura = 15;
let largura = 20;
calculoPerimetroEArea(altura, largura);

//Desafio 5
function calculoPerimetroEAreaCircular(raio) {
    let perimetro = Math.PI * raio*2;
    let area = Math.PI*(raio * raio);

    console.log(`Área da sala Circular: ${area.toFixed(2)} metros quadrados`);
    console.log(`Perímetro da sala Circular: ${perimetro.toFixed(2)} metros`);
}
let raio = 7;
calculoPerimetroEAreaCircular(raio);

//Desafio 6
function exibirTabuada(numero) {
    let tabuada = numero;

    for (let i = 0; i <= 10; i++) {
        let resultado = tabuada * i;
        console.log(`${numero} X ${i} = ${resultado}`);
    }
}
let numeroTabuada = 5;
exibirTabuada(numeroTabuada);
