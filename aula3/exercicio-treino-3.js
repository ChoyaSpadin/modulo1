/*03 - Elabore um programa que recebe o seu nome, endereço e hobby e mostra cada uma das informações da seguinte forma:
// Nome -> Letra maiúscula
// Endereço -> Letra minúscula
// Hobby -> Primeira letra maiúscula
// Exemplo Entrada:
Nome: bruno fabri
Endereço: Rua ABC
Hobby: jogar cs
Exemplo Saída:
Nome: BRUNO FABRI
Endereço: rua abc
Hobby: Jogar cs
*/

const prompt = require("prompt-sync")();

const nome = prompt("Digite seu nome: ");
const endereco = prompt("Digite seu endereço: ");
const hobby = prompt("Digite seu Hobby: ");

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

console.log(nome.toUpperCase());
console.log(endereco.toLowerCase());
console.log(hobby.substring(0, 1).toUpperCase().concat(hobby.substring(1)));
console.log(hobby.capitalize());
