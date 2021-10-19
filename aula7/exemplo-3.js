// Contar a quantidade de palavras em um texto

function contarPalavras(text) {
    let existeSeparador = true;
    let palavras = 0;

    for (const c of text) {
        if (separador(c)) {
            existeSeparador = true;

            continue;
        }

        if (existeSeparador) {
            palavras++;

            existeSeparador = false;
        }
    }

    return palavras;
}

function separador(c) {
    const separadores = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];

    return separadores.includes(c);
}

console.log(contarPalavras(""));
console.log(contarPalavras(" "));
console.log(contarPalavras("SQL Server!! "));
console.log(contarPalavras(" React Native PHP ASP"));
console.log(contarPalavras(" O PHP existe há mais de 26 anos "));
console.log(contarPalavras("Vamos estudar bancos de dados relacionais"));
