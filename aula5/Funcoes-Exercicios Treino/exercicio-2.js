//Com função
// define uma função que recebe 2 argumentos e retorna a soma dos mesmos
const prompt = require("prompt-sync")();
function soma(numeroA, numeroB) {
  numeroA = +prompt("Digite o primeiro numero: ");
  numeroB = +prompt("Digite o segundo numero: ");
  return console.log("O resultado é:", numeroA + numeroB);
}
soma();

//outro exemplo
function multiplicacao(numeroD, numeroE) {
  numeroD = 5;
  numeroE = 5;
  return console.log(numeroD * numeroE);
}
