/*Faça um programa que peça dois números, imprima o maior deles ou imprima "Numeros iguais" se os números forem iguais.
 */

const prompt = require("prompt-sync")();

let num1 = +prompt("Digite o primeiro numero: ");
let num2 = +prompt("Digite o segundo numero: ");

if (num1 > num2) {
    console.log(`O numero ${num1} é o maior que ${num2}`);
} else if (num1 === num2) {
    console.log(`Os numeros ${num1} e ${num2} são iguais!`);
} else {
    console.log(`O numero ${num2} é o maior ${num1}`);
}
