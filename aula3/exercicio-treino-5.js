/*Parte 1
Faça um script que peça um valor e mostre na tela se o valor é positivo ou negativo.
*/
const prompt = require("prompt-sync")();

// let num = prompt("Digite o valor: ");
//
// if (num > 0) {
//     console.log("Positivo");
// } else {
//     console.log("Negativo");
// }

/*
Parte 2
Agora implemente a funcionalidade de não aceitar o número 0, no input.
*/

let valor = prompt("Digite o valor: ");
if (valor === 0) {
  console.log("Numero inválido");
} else if (valor > 0) {
  console.log("Valor positivo");
} else {
  console.log("Valor negativo");
}
