// Nome: Convertendo Celsius/Farenheit
// Objetivo: Escrever duas funções de conversão, uma de graus celsius em farenheit e a outra que faça o contrário.
//     Dificuldade: Principiante
// 1 - Crie um aplicativo de conversão entre as temperaturas Celsius e Farenheit.
// 2 - Primeiro o usuário deve escolher se vai entrar com a temperatura em Celsius ou Farenheit, depois a conversão escolhida é realizada.
// 3 - Se C é a temperatura em Celsius e F em farenheit, as fórmulas de conversão são:
//     F = (9 * C / 5) + 32
// C = 5 * (F - 32) / 9

const prompt = require("prompt-sync")();

const escolha = prompt("Digite Celsius ou Farenheit: ")
console.log("você escolheu", escolha.charAt(0).toUpperCase() + escolha.slice(1))

if (escolha === "Celsius" || escolha === "celsius") {
    cToF(+prompt("Digite a temperatura em Celsius: "));

    function cToF(celsius) {
        const cTemp = celsius;
        const cToFahr = cTemp * 9 / 5 + 32;
        const message = cTemp + '\xB0C equivale ' + cToFahr + ' \xB0F.';
        console.log(message);
    }
} else if (escolha === "Farenheit" || escolha === "farenheit") {
    fToC(+prompt("Digite a temperatura em Farenheit: "));

    function fToC(fahrenheit) {
        const fTemp = fahrenheit;
        const fToCel = (fTemp - 32) * 5 / 9;
        const message = fTemp + '\xB0F equivale ' + fToCel + '\xB0C.';
        console.log(message);
    }
} else
{
    console.log("Digitou errado")
}
