/* Faça um programa com uma função chamada somaImposto. A função possui dois parâmetros formais: taxaImposto, que é a quantia de imposto sobre vendas
expressa em porcentagem e custo, que é o custo de um item antes do imposto. A função “altera” o valor de custo para incluir o imposto sobre vendas.
*/
const prompt = require("prompt-sync")();

const taxa = +prompt("Taxa imposto: ") / 100;
let custo = +prompt("Valor do produto: ");

function somaImposto(taxaImposto, custo) {
  taxaImposto = taxa / 100;
  console.log(taxa);
  custo = custo + custo * taxaImposto;
  return custo;
}
custo = somaImposto(taxa, custo);

console.log("Resultado:" + custo);
