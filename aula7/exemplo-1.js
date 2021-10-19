// Calcular a soma de todos os dígitos de um número inteiro positivo

function somarDigitos(digito) {
  const digitoString = digito.toString();

  let soma = 0;

  for (const char of digitoString) {
    const digito = +char;
    soma += digito;
  }

  return soma;
}

const resultado = somarDigitos(1235231);
console.log(`Soma de todos os dígitos: ${resultado}.`);
