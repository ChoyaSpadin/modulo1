// Faça um programa de cadastro de clientes que mostre um menu de opções e permita com que a pessoa escolha umas das
// opções, exibindo qual foi a opção escolhida

const prompt = require("prompt-sync")()

console.log("Cadastro de Clientes")
console.log("0 - Fim")
console.log("1 - Inclui")
console.log("2 - Altera")
console.log("3 - Exclui")
console.log("4 - Consulta")

const num = parseInt(prompt("Digite um numero: "))

if (num === 1, 2, 3, 4) {
    console.log(`Você escolheu o numero ${num}.`)
} else {
    console.log("Digitou errado")
}
