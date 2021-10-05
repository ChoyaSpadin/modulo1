/*Faça um programa, com uma função que necessite de um argumento. A função retorna o valor de caractere ‘P’, se seu argumento for positivo, e ‘N’, se seu argumento for zero ou negativo.
 */
const prompt = require("prompt-sync")();

let num = +prompt("Digite seu numero:");

function PouN(num) {
  if (num < 0) {
    return "N";
  } else if (num > 0) {
    return "P";
  } else {
    return "0";
  }
}

console.log(PouN(num));
