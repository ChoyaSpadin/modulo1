// Exercício 4 - Elabore um programa que recebe dois valores inteiros e mostra a soma desses valores

// Exemplo:

// Primeiro valor = 2
// Segundo valor = 3
// Soma = 5

const prompt = require("prompt-sync")()

const numero1 = parseInt(prompt("Digite o primeiro numero: "))
const numero2 = parseInt(prompt("Digite o segundo numero: "))

console.log(numero1 + numero2)
