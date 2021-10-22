// Crie um programa que vai ler vários números e colocar em uma lista. Depois
// disso, crie duas listas extras que vão conter apenas os valores pares e os valores
// ímpares digitados, respectivamente. Ao final, mostre o conteúdo das três listas
// geradas.

const prompt = require("prompt-sync")();

const listaCompletaModelo1 = [];
const par = [];
const impar = [];

for (let i = 0; i < 3; i++) {
    const numero = +prompt("Digite um número: ");

    listaCompletaModelo1.push(numero);

    if (numero % 2 === 0) {
        par.push(numero);
    } else {
        impar.push(numero);
    }
}

const listaCompletaModelo2 = [...par, ...impar];

console.log("Valores pares: ", par);
console.log("Valores impares", impar);
console.log("Lista completa 1", listaCompletaModelo1);
console.log("Lista completa 2", listaCompletaModelo2);
