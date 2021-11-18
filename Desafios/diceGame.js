// **Projeto 03 – Jogo de Dados**
//
// Utilizando os conceitos aprendidos até objetos, crie um programa onde jogadores joguem um dado e tenham resultados aleatórios.
//
//     O programa tem que:
//
// - Perguntar quantas rodadas você quer fazer;
// - Perguntar quantos jogadores vão jogar;
// - Criar um objeto pra cada jogador com nome e número tirado;
// - Guarda todos os objetos em uma lista;
// - Ordenar esses objetos, sabendo que o vencedor tirou o maior número no dado.
// - Mostrar no final qual jogador ganhou mais rodadas e foi o grande campeão.

const dices = {
  play: function () {
    // const rodadas = prompt("Digite a quantidade de rodadas: ");
    const rodadas = 5;
    const qtsJogadores = 4;
    const vencedores = [];

    for (let qntd = 0; qntd < rodadas; qntd++) {
      const jogos = [];
      for (let i = 0; i < qtsJogadores; i++) {
        const jogo = {
          nome: "Jogador" + (i + 1),
          numero: Math.floor(Math.random() * 6 + 1),
        };

        jogos.push(jogo);

        jogos.sort((a, b) => {
          if (b.numero < a.numero) {
            return -1;
          } else {
            return true;
          }
        });
      }

      console.log(`${qntd + 1}° Rodada: `);
      const jogoVencedor = jogos[0];
      console.log(jogoVencedor);
      vencedores.push(jogoVencedor.nome);
      // console.log(jogos[0], typeof jogos[0]);
    }

    function mode(arr) {
      return arr
        .sort(
          (a, b) =>
            arr.filter((v) => v === a).length -
            arr.filter((v) => v === b).length
        )
        .pop();
    }

    const vencedor = mode(vencedores);

    console.log(vencedor);
    console.log(vencedores);

    const chave = "Jogador1";
    objeto = {};
    // objeto[chave] = 0;
    console.log(objeto);

    for (let i = 0; i < vencedores.length; i++) {
      // console.log(67, i);
      const vencedor = vencedores[i];
      // console.log(69, vencedor, typeof vencedor);
      // console.log(70, objeto[vencedor]);
      objeto[vencedor] = 1;
      if (objeto[vencedor] === undefined) {
        // console.log("entrou no if 73");
        objeto[vencedor] = 1;
      } else {
        objeto[vencedor] = objeto[vencedor] + 1;
        // console.log("entrou no elseif 78");
      }

      // console.log(80, objeto[vencedor]);
      // console.log(81, objeto[vencedor] + 1);
      // console.log(82, objeto);
      // console.log("--------------");
    }
  },
};

module.exports = dices;
