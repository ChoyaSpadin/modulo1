// Retornar a maior string de um array
function maiorString(array) {
  let maior = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > maior.length) {
      maior = array[i];
    }
  }
  return maior;
}

console.log(
  `A maior STRING é: ${maiorString([
    "Sao Paulo",
    "Rio de Janeiro",
    "Amazonas",
    "Pernambuco",
    "Santa Catarina",
    "Rio Grande do Norte",
    "Sergipe",
  ])}`
);
