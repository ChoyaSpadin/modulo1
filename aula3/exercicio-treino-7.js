/*Crie um programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino,
 caso escreva outra letra: Sexo Inválido.
   */

const prompt = require("prompt-sync")();

const sexo = prompt("Digite Masculino ou Feminino");

if (sexo.slice(0, 1) === "M" || sexo.slice(0, 1) === "m") {
    console.log("Masculino")
} else if (sexo.slice(0, 1) === "F" || sexo === "f") {
    console.log("Feminino");
} else {
    console.log("Você não digitou as letras correta!");
}
