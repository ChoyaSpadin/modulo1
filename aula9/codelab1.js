// Crie um programa onde o usuário possa digitar vários valores numéricos e
// cadastre-os em uma lista. Caso o número já esteja lá dentro, ele não será
// adicionado. No final, serão exibidos todos os valores únicos digitados, em ordem
// crescente

const prompt = require("prompt-sync")();

let numeros = [1, 2, 3];
numeros.push(4);

console.log(numeros); // [1, 2, 3, 4]

// numeros.push(5, 6, 7);
numeros.push(+prompt("Digite Nº: "));

console.log(numeros);

if (numeros.indexOf("") !== -1) {
  console.log("Tem");
} else {
  console.log("Não tem");
}
