const myNumber = 12.4032
console.warn(`\nNúmero original: ${myNumber}`)

//transforma número em string
const numberAsString = myNumber.toString()
console.log(`\nNúmero transformado em string - variável: ${numberAsString} - typeof: ${typeof numberAsString}`)

//retorna número com uma determinada qtd de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2)
console.log(`\nNúmero com duas casas decimais: ${fixedTwoDecimals}`)

//transforma uma String em float
console.log(`\nString parseada para float: ${parseFloat('13.22')}`)

//transforma uma String em int
console.log(`\nString parseada para int: ${parseInt('13.20')}`)