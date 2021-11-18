// Faça um programa que ajude um jogador da MEGA SENA a criar palpites.
// O programa vai perguntar quantos jogos serão gerados e vai sortear 6
// números entre 1 e 60 para cada jogo, cadastrando tudo em uma lista composta.

/*
criar palpites
receber qntd de jogos
um jogo tem 6 numeros
os numeros de cada jogo sao aleatorios
gerar cada jogo com 6 numeros aleatorios
adicionar o jogo gerado em uma lista
 */

// const jogo = [15, 32, 35, 14, 1, 6]
//
// const listaJogos = []
//
// listaJogos.push(jogo)

// Receber quantidade de jogos
const prompt = require("prompt-sync")();
const quantidadeJogos = +prompt("Digite quantidade de jogos: ");
const listaJogos = [];

//função do jogo
function jogo() {
  const numerosSorteados = [];

  for (let i = 0; i < 6; i++) {
    const palpites = Math.floor(Math.random() * 60) + 1;
    if (numerosSorteados.indexOf(palpites) !== -1) {
    } else {
      numerosSorteados.push(palpites);
    }
    // if (numerosSorteados.indexOf(palpites === numerosSorteados.push(palpites)));
    // numerosSorteados.push(palpites);
  }
  listaJogos.push(numerosSorteados);
}

//Quantidade de repetição
for (let i = 0; i < quantidadeJogos; i++) {
  jogo();
}
console.log(listaJogos);
