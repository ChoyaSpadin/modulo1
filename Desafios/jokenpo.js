// ## O programa tem que:
//
// - Permitir que eu decida quantas rodadas iremos fazer;
// - Ler a minha escolha (Pedra, papel ou tesoura);
// - Decidir de forma aleatória a decisão do computador;
// - Mostrar quantas rodadas cada jogador ganhou;
// - Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador e jogador);
// - Perguntar se o Jogador quer jogar novamente, se sim inicie volte a escolha de quantidade de rodadas, se não finalize o programa.

const prompt = require("prompt-sync")();

function play() {
  const computador = ["papel", "pedra", "tesoura"];
  const jogadaComputador =
    computador[Math.floor(Math.random() * computador.length)];

  const jogador1 = prompt("Jogador 1: Digite pedra, papel ou tesoura: ");
  const jogador2 = prompt(jogadaComputador);

  if (jogador1 === "pedra") {
    if (jogador2 === "tesoura") {
      console.log("Pedra quebra tesoura");
    } else if (jogador2 === "papel") {
      console.log("Papel envolve a Pedra");
    } else if (jogador2 === "pedra") {
      console.log("Empate");
    }
  } else if (jogador1 === "tesoura") {
    if (jogador2 === "pedra") {
      console.log("Pedra quebra tesoura");
    } else if (jogador2 === "papel") {
      console.log("tesoura corta papel");
    } else if (jogador2 === "tesoura") {
      console.log("Empate");
    }
  } else if (jogador1 === "papel") {
    if (jogador2 === "pedra") {
      console.log("Papel envolve pedra");
    } else if (jogador2 === "tesoura") {
      console.log("Tesoura corta papel");
    } else if (jogador2 === "papel") {
      console.log("Empate");
    }
  }
}
play();
