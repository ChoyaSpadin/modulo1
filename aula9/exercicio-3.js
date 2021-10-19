// imprimir todas as tabuadas do número 1 ao 10.

let numero = +prompt("Digite o número desejado: ");
function ImprimirTabuada(numero) {
  for (let i = 1; i <= 10; i++) {
    const linha = numero + " x " + i + " = " + numero * i;
    console.log(linha);
  }
}
for (let i = 1; i < 10; i++) {
  ImprimirTabuada(i);
  console.log("");
}
