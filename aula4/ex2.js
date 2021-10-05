/*DESAFIO 02
Jogo da adivinhação
Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10 e peça para o usuário tentar descobrir qual foi o número escolhido
 pelo computador. O programa deverá escrever na tela se o usuário venceu ou perdeu.
*/

const prompt = require("prompt-sync")();

const random = Math.floor(Math.random() * 10) + 1;

let number = +prompt("Adivinhe um numero de  1 a 10: ");

while (number !== random) {
  number = +prompt("Adivinhe um numero de  1 a 10: ");
}

if (number === random) {
  console.log("Acertou");
} else if (number > random) {
  console.log("Mais baixo");
} else if (number < random) {
  console.log("Mais alto");
}
