// Criar uma função que receba como parâmetro um array de números e retorne um array contendo somente números positivos.

function retornarPositivos(array) {
  let array2 = [];
  for (let i = 0; i < array.length; i++) {
    let elementos = array[i];
    if (elementos >= 0) {
      array2.push(elementos);
    }
  }
  return array2;
}
const array = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
const array2 = retornarPositivos(array);
console.log(`Os números positivos do array são: ${array2}`);
