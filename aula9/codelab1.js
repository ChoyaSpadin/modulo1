// Crie um programa onde o usuário possa digitar vários valores numéricos e
// cadastre-os em uma lista. Caso o número já esteja lá dentro, ele não será
// adicionado. No final, serão exibidos todos os valores únicos digitados, em ordem
// crescente

const prompt = require("prompt-sync")();

let numeros = [1, 2, 3];
numeros.push(4);

console.log(numeros); // [1, 2, 3, 4]

const numeroDigitado = +prompt("Digite Nº: ");

// numeros.push(numeroDigitado);

if (numeros.indexOf(numeroDigitado) !== -1) {
  console.log("Já existe");
} else {
  numeros.push(numeroDigitado);
}
console.log(numeros);
