/*--------------------------------------------------------
Retorno de valores
Serve para quando nós precisamos retornar resultados que não estão pré-formatados, por exemplo na soma, ao invés de já retornar a soma no print, eu posso retornar somente o resultado:
*/
somar = (a = 0, b = 0, c = 0) => {
  const s = a + b + c;
  return s;
};
somar();

//1° forma de receber:

somar1 = (a = 0, b = 0, c = 0) => {
  const soma = a + b + c;
  return soma;
};
somar1();
let number1 = somar1(3, 4, 5);
let number2 = somar1(4, 5);
console.log(`Meus resultados deram ${number1} e ${number2}`);

// # 2º forma de receber
somar = (a = 0, b = 0, c = 0) => {
  const somaResultado = a + b + c;
  return somaResultado;
};
somar();
let r1 = somar(3, 4, 5);
let r2 = somar(4, 5);
console.log(somar(3, 4, 7));
