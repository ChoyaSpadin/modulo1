/*Faça um programa que calcule através de uma função o IMC de uma pessoa que tenha
1,68 e pese 75kg.
*/

const prompt = require("prompt-sync")();

const peso = prompt("Digite seu peso: ");
const altura = prompt("Digite sua altura");

function calculoImc(peso, altura) {
  const imc = peso / (altura * altura);
  console.log(imc.toFixed(2));

  if (imc < 17) {
    console.log("Muito abaixo do peso");
  } else if (imc >= 17 && imc <= 18.49) {
    console.log("Abaixo do peso");
  } else if (imc >= 18.5 && imc <= 24.99) {
    console.log("Peso normal");
  } else if (imc >= 25 && imc <= 29.99) {
    console.log("Acima do peso");
  } else if (imc >= 30 && imc <= 34.99) {
    console.log("Obesidade I");
  } else if (imc >= 35 && imc <= 39.99) {
    console.log("Obesidade I");
  } else {
    console.log("Valor Inválido");
  }
}
calculoImc(peso, altura);
