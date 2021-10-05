// Qual o valor do troco?
// Defina uma variável para o valor de uma compra que custou R$100,98;
// Defina uma variável para o valor que o cliente pagou R$150,00;
// Defina uma variável que calcula o valor do troco e exiba-o no console com o valor final arredondado.

const prompt = require("prompt-sync")();

const valorTotal = parseInt(prompt("Digite o valor total: "));
const valorPago = parseInt(prompt("Digite o valor pago: "));

const resultado = valorPago - valorTotal; // number

console.log(`Seu troco é de R$${resultado.toFixed(2)}`);
