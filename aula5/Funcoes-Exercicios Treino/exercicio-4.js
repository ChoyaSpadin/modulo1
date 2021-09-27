//# Escopo de variáveis
function teste(x){
    let numero1 = 1; // #Variável local
    let numero2 = 3; // #Variável local
    return console.log(`N vale: ${numero1}, X só vale ${numero2}, aqui dentro!`)
  }
  teste()
  const numero2 = 2 // #Variável
  console.log(`N vale: ${numero2}`)