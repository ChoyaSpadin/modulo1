// Crie um programa onde o usuário possa digitar vários valores numéricos e
// cadastre-os em uma lista. Caso o número já esteja lá dentro, ele não será
// adicionado. No final, serão exibidos todos os valores únicos digitados, em ordem
// crescente

const prompt = require("prompt-sync")();

function getNumeroDigitado() {
    let numero;

    while (typeof numero !== "number" || isNaN(numero)) {
        const textoDigitado = prompt("Digite Nº: ");

        numero = +textoDigitado;
    }

    return numero;
}

function programa() {
    const numeros = [];

    const vezes = getNumeroDigitado();

    for (let i = 0; i < vezes; i++) {
        const numeroDigitado = getNumeroDigitado();

        if (numeros.indexOf(numeroDigitado) !== -1) {
            console.log("Já existe");
        } else {
            numeros.push(numeroDigitado);
        }
    }

    numeros.sort();

    console.log(numeros);
}

let textoDigitado;

while (textoDigitado !== "q") {
    programa();

    textoDigitado = prompt(
        "Pressione enter para continuar ou digite 'q' para sair."
    );
}
