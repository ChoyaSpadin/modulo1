// Criar uma função que junte dois arrays e retorno o resultado como um novo array

function juntarArrays(array1, array2) {
    return [...array1, ...array2];
}

const arrayNumeros1 = [1, 2, 3];
const arrayNumeros2 = [4, 5, 6];

const arrayJunto = juntarArrays(arrayNumeros1, arrayNumeros2);

console.log(arrayJunto);
