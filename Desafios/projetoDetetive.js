// Faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
//     ⦁	"Telefonou para a vítima?"
// ⦁	"Esteve no local do crime?"
// ⦁	"Mora perto da vítima?"
// ⦁	"Devia para a vítima?"
// ⦁	"Já trabalhou com a vítima?"
//
// O programa deve no final emitir uma classificação sobre a participação da pessoa no crime.
//     Se a pessoa responder positivamente a 2 questões ela deve ser classificada como "Suspeita", entre 3 e 4 como "Cúmplice" e 5 como "Assassino".
//     Caso contrário, ele será classificado como "Inocente".

const prompt = require("prompt-sync")();

const sherlock = {
  play: function () {
    console.log("Responda com Sim ou Não");

    // function perguntar(pergunta) {
    //   const resposta = prompt(pergunta);
    //
    //   let respostaBool = false;
    //
    //   if (resposta === "sim") {
    //     respostaBool = true;
    //     console.log("Texto SIM");
    //   } else {
    //     console.log("Texto Não");
    //   }
    //   return respostaBool;
    // }
    // perguntar(pergunta1);

    let pergunta1 = prompt("Telefonou para a vítima? ");
    let pergunta2 = prompt("Esteve no local do crime? ");
    let pergunta3 = prompt("Mora perto da vítima? ");
    let pergunta4 = prompt("Devia para a vítima? ");
    let pergunta5 = prompt("Já trabalhou com a vítima? ");

    let sim = 0;

    if (pergunta1 === "Sim" || pergunta1 === "sim") {
      sim += 1;
    }
    if (pergunta2 === "Sim" || pergunta2 === "sim") {
      sim += 1;
    }
    if (pergunta3 === "Sim" || pergunta3 === "sim") {
      sim += 1;
    }
    if (pergunta4 === "Sim" || pergunta4 === "sim") {
      sim += 1;
    }
    if (pergunta5 === "Sim" || pergunta5 === "sim") {
      sim += 1;
    }

    if (sim === 2) {
      console.log("Suspeito");
    } else if (sim === 3 || sim === 4) {
      console.log("Cúmplice");
    } else if (sim === 5) {
      console.log("Culpado");
    } else {
      console.log("Inocente");
    }
  },
};

module.exports = sherlock;
