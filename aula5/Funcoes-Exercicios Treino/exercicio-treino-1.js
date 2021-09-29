/*Exercicios:
# Faça um programa que tenha uma função chamada área(), que receba as dimensões de um terreno retangular (largura e comprimento) 
e mostre a área do terreno:
*/

const prompt = require("prompt-sync")();

console.log("Calcule a área")
const largura = +prompt("Digite a largura: ");
const comprimento = +prompt("Digite o comprimento: ");

function area(largura, comprimento) {
    area = largura* comprimento;
    console.log("A área é de", area )
}
area(largura, comprimento)
