// 02 - Escreva um programa que solicite uma frase ao usuário e escreva a frase toda em maiúscula e sem espaços em branco.

const prompt = require("prompt-sync")();

const frase = prompt("Digite sua frase: ");

console.log(frase.toUpperCase());
