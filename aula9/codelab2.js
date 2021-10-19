// Crie um programa que vai ler vários números e colocar em uma lista. Depois
// disso, crie duas listas extras que vão conter apenas os valores pares e os valores
// ímpares digitados, respectivamente. Ao final, mostre o conteúdo das três listas
// geradas.

const prompt = require("prompt-sync")();

let par = [];
let impar = [];

let user = +prompt("Digite um numero: ");

if (user % 2 === 0) {
  par.push(user);
} else {
  impar.push(user);
}

while (par === []) {
  +prompt("Digite um numero: ");
}

console.log("Valores pares: ", par);
console.log("Valores impares", impar);
console.log("Lista completa", par + impar);
