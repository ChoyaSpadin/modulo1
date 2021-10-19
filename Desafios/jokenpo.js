// ## O programa tem que:
//
// - Permitir que eu decida quantas rodadas iremos fazer;
// - Ler a minha escolha (Pedra, papel ou tesoura);
// - Decidir de forma aleatória a decisão do computador;
// - Mostrar quantas rodadas cada jogador ganhou;
// - Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador e jogador);
// - Perguntar se o Jogador quer jogar novamente, se sim inicie volte a escolha de quantidade de rodadas, se não finalize o programa.

const prompt = require("prompt-sync")();

function inicia() {
  var opcao = parseInt(
    prompt("Qual e a opcao  1 - Papel 2 - Pedra 3 - Tesoura")
  );
  var resposta = Math.floor(Math.random() * 3 + 1);
  var opcaoe = "";
  var verificador = true;

  if (resposta === 1) {
    opcaoe += "a resposta e papel";
  } else if (resposta === 2) {
    opcaoe += "a resposta e pedra";
  } else if (resposta === 3) {
    opcaoe += "a resposta e tesoura";
  }

  if (opcao === resposta) {
    console.log("a resposta e invalida" + opcaoe + ".");
  } else if (opcao === 1 && resposta === 2) {
    console.log("a resposta e valida" + opcaoe + ".");
    inicia();
  } else if (opcao === 2 && resposta === 1) {
    console.log("a resposta e invalida" + opcaoe + ".");
  } else if (opcao === 3 && resposta === 1) {
    console.log("a resposta e valida" + opcaoe + ".");
    inicia();
  } else if (opcao === 3 && resposta === 2) {
    console.log("a resposta e invalida" + opcaoe + ".");
  } else if (opcao === 2 && resposta === 3) {
    console.log("a resposta e valida" + opcaoe + ".");
    inicia();
  } else if (opcao === 1 && resposta === 3) {
    console.log("a resposta e invalida" + opcaoe + ".");
  }
}
inicia();
