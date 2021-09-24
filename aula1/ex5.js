// Exercício 5 - Elabore um programa que receba 3 notas de um aluno e calcule a média dele.

// Exemplo:

// Primeira nota = 7
// Segunda nota = 8
// Terceira nota = 10

// Média = 7,75

const prompt = require("prompt-sync")()

const nota1 = +(prompt("Digite a primeira nota:"))
const nota2 = +(prompt("Digite a segunda nota:"))
const nota3 = +(prompt("Digite a terceira nota:"))

media = (nota1 + nota2 + nota3) / 3;

console.log("Sua média é:" + media.toFixed(2))

if (media >= 6) {
    console.log("Aprovado");

} else {
    if (media <= 5) {
        console.log("Reprovado");
    } else {
        console.log("Recuperação");
    }
}
