// Calculadora de aumento de aluguel - Parte 1
// A sua calculadora vai receber o valor do aluguel e calcular o aumento baseado no IGPM de 31%.
// A calculadora deve apresentar o aluguel reajustado no formato R$9999.99

// Exemplo:
//  Valor do aluguel = 1000
//  Valor do aluguel reajustado = R$ 1310,00

const prompt = require("prompt-sync")();

const aluguel = parseFloat(prompt("Valor do aluguel: "));
const reajuste = parseFloat(prompt("Valor do reajuste: "));
const reajustePorcento = reajuste * 100 - 100;
const resultado = aluguel * reajuste;

console.log(
  `O aluguel com reajuste de ${reajustePorcento}% ficará R$${resultado.toFixed(
    2
  )}.`
);
