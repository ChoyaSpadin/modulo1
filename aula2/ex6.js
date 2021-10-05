// Calculadora de Dano - Escreva um programa que receba dois valores digitados pelo usuário:

// Quantidade de vida de um monstro (entre 10 e 50);
// Valor do ataque do jogador por turno (entre 5 e 10);
// Baseado nos valores digitados, exiba a quantidade de turnos que o jogador irá demorar para conseguir derrotar o monstro.
// O jogador irá derrotar o monstro em 8 turnos.

const prompt = require("prompt-sync")();

const monstro = parseInt(
  prompt("Digite a quantidade de vida do monstro (entre 10 e 50): ")
);
const ataque = parseInt(
  prompt("Digite o valor de ataque do jogador (entre 5 e 10): ")
);

const turnos = Math.ceil(monstro / ataque);

console.log(
  `O jogador irá precisar de ${turnos} turnos para derrotar o monstro.`
);
