// Conversor de moedas
// Crie um programa que solicite um um valor em real ao usuário e converta esse valor, para:

// DOLAR
// EURO
// LIBRA ESTERLINA
// DÓLAR CANADENSE
// PESO ARGENTINO
// PESO CHILENO

// Para esse exercício você precisará realizar uma pesquisa para saber a cotação de cada moeda em real.
// Mostrar o resultado no formato U$9999.99

// Resolução com valor de real para dolar:

const prompt = require("prompt-sync")()

const valorEmReal = parseInt(prompt("Valor em R$: "))
const valorEmDolar = valorEmReal / 5.30
const valorEuro = valorEmReal / 6.23
const valorEstrelina = valorEmReal / 7.28
const valorCanadense = valorEmReal / 4.19
const valorArgentino = valorEmReal / 0.054
const valorChileno = valorEmReal / 0.0067

console.log(`R$${valorEmReal.toFixed(2)} = U$${valorEmDolar.toFixed(2)}`)
console.log(`R$${valorEmReal.toFixed(2)} = U$${valorEuro.toFixed(2)}`)
console.log(`R$${valorEmReal.toFixed(2)} = U$${valorEstrelina.toFixed(2)}`)
console.log(`R$${valorEmReal.toFixed(2)} = U$${valorCanadense.toFixed(2)}`)
console.log(`R$${valorEmReal.toFixed(2)} = U$${valorArgentino.toFixed(2)}`)
console.log(`R$${valorEmReal.toFixed(2)} = U$${valorChileno.toFixed(2)}`)
console.log("Cotação do dia 23/09/2021")
