// Faça um programa que ajude um jogador da MEGA SENA a criar palpites.
// O programa vai perguntar quantos jogos serão gerados e vai sortear 6
// números entre 1 e 60 para cada jogo, cadastrando tudo em uma lista composta.

// function sorteia() {
//   return Math.round(Math.random() * 59) + 1;
// }

function sorteia() {
  return Math.floor(Math.random() * 60) + 1;
}

function sorteiaNumeros() {
  let megaSena = [];
  let numero = 1;
  let quantidadeMaximaDeNumeros = 6;

  while (numero <= quantidadeMaximaDeNumeros) {
    let numerosSorteados = sorteia();
    let achou = false;

    for (posicao = 0; posicao < megaSena.length; posicao++) {
      if (megaSena[posicao] == numerosSorteados) {
        achou = true;
        break;
      }
    }

    if (achou == false) {
      megaSena.push(numerosSorteados);
      numero++;
    }
  }

  megaSena.sort(function (a, b) {
    return a - b;
  });
  console.log(megaSena);
}
