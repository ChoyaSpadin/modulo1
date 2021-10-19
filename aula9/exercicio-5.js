// Calcular a soma dos números de um array

function somarArray(array) {
  let soma = 0;
  for (let i = 0; i < array.length; i++) {
    soma += array[i];
  }
  return soma;
}

let array = [5, 5, 5];
let soma = somarArray(array);
console.log(`A soma do array é: ${soma}`);
