// #03 - Você está na flor da idade?
// Defina uma variável para o valor do ano do nascimento;
// Defina uma variável para o valor do ano atual;
// Defina uma variável que calcula o valor final da idade da pessoa;
// Exiba uma mensagem final dizendo a idade da pessoa e a mensagem "Você está na flor da idade".

const prompt = require("prompt-sync")()

const anoNascimento = parseInt(prompt("Digite seu ano de nascimento: "))
const anoAtual = parseInt(prompt("Digite ano atual: "))

const idade = anoAtual - anoNascimento

console.log(`Sua idade é: ${idade}.`)

if (idade >= 50) {
    console.log("Você está na flor da idade!")
} else {
    console.log("Você NÃO está na flor da idade!")
}
