const prompt = require("prompt-sync")();
const dices = require("./diceGame");
const sherlock = require("./projetoDetetive");
const jokenpo = require("./jokenpo");

const escolha = prompt("Escolha entre Dice, Sherlock ou Jokenpo:");
if (escolha === "Dice") {
  dices.play();
} else if (escolha === "Sherlock") {
  sherlock.play();
} else if (escolha === "Jokenpo") {
  // console.log(jokenpo, typeof jokenpo);
  jokenpo.play();
}
