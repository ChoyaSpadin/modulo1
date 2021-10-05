//Faça um programa que tenha uma função chamada voto() que vai receber como parâmetro o ano de nascimento de uma pessoa,
//retornando um valor literal indicando se uma pessoa tem voto NEGADO, OPCIONAL ou OBRIGATÓRIO nas eleições:

const prompt = require("prompt-sync")();

nascimento = prompt("Digite o ano de nascimento: ");

const anoAtual = new Date().getFullYear();

const idade = anoAtual - nascimento;

console.log("Sua idade é", idade);

function voto() {
  if (idade >= 18) {
    console.log("Você é obrigado a votar");
  } else if (idade === 16 || idade === 17) {
    console.log("Seu voto e opcional");
  } else {
    console.log("voce nao pode votar");
  }
}

voto();
