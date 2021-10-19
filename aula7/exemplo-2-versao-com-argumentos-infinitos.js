// Criar uma função que junte dois arrays e retorno o resultado como um novo array

function juntarArrays(...arrays) {
    const arrayFinal = [];

    for (const array of arrays) {
        arrayFinal.push(...array);
    }

    return arrayFinal;
}

const arrayNumeros1 = [1, 2, 3];
const arrayNumeros2 = [4, 5, 6];
const arrayNumeros3 = [7, 8, 9];

const arrayJunto = juntarArrays(arrayNumeros1, arrayNumeros2, arrayNumeros3);

console.log(arrayJunto);
