// Exercício 6 - Elabore um programa que recebe dois valores inteiros e mostra se o primeiro valor é maior ou igual ao segundo valor

// Exemplo:

// Primeiro valor = 3
// Segundo valor = 2
// Resultado = True

const prompt = require("prompt-sync")();

const n1 = parseInt(prompt("Primeiro valor:"))
const n2 = parseInt(prompt("Segundo valor:"))

if (n1 > n2) {
    console.log(`O primeiro valor ${n1} é maior que o segundo valor ${n2}`)
} else {
    if (n1 === n2) {
        console.log(`O primeiro valor ${n1} é igual ao segundo ${n2}`)
    } else {
        console.log(`O primeiro valor ${n1} é menor que o segundo valor ${n2}`)
    }
}
