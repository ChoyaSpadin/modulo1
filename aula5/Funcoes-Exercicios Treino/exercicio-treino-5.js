/*Faça um script Python com uma função que necessite de três argumentos, e que forneça a soma desses três argumentos. Seu script também deve fornecer
 a média dos três números, através de uma segunda função que chama a primeira.
*/

const prompt = require("prompt-sync")();

/*Faça um script com uma função que necessite de três argumentos, e que forneça a soma desses três argumentos.*/

function soma(n1, n2, n3) {
  return n1 + n2 + n3;
}
// fornecer a média dos três números, através de uma segunda função que chama a primeira.

function media() {
  n1 = +prompt("Primeiro numero: ");
  n2 = +prompt("Segundo numero : ");
  n3 = +prompt("Terceiro numero: ");
  media = soma(n1, n2, n3) / 3;
  console.log("Resultado da some é", soma(n1, n2, n3));
  console.log("E a média fica", media);
}
media();
