// Localizar o maior valor dentro de um array de números
function LocalizarMaior(array) {
  let maximo = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maximo) {
      maximo = array[i];
    }
  }
  return maximo;
}

const array = [1, -1, 4, 7, 87, 6];
let maximo = LocalizarMaior(array);
console.log("Maior número: ", maximo);
