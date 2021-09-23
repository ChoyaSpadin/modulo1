// E os 10% do garçom?
// Defina uma variável para o valor de uma refeição que custou R$ 42,54;
// Defina uma variável para o valor da taxa de serviço que é de 10%;
// Defina uma variável que calcula o valor total da conta e exiba-o no console com essa formatação: R$ 9999.99.

const prompt = require("prompt-sync")()

let valorComida = parseInt(prompt("Digite o valor da comida: "))
const valorTaxa = valorComida * 0.1

const conta = valorTaxa + valorComida

console.log(`O valor total da sua conta é R$ ${conta.toFixed(2)}`)
