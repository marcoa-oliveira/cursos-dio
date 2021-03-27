//retorna a quantidade de letras
const textSize = 'Texto'.length
console.log(`Quantidade de letras : ${textSize}`)

//retorna um array quebrando a string por um delimitador
const splittedText = 'Texto'.split('x')
console.log(`\nArray com as posições separadas pelo delimitador: ${splittedText}`)

//busca por um valor e substitui por outro
const replacedText = 'Texto'.replace('Text','txeT')
console.log(`\nSubstituição de valor: ${replacedText}`)

//retorna a fatia de um valor
const lastChar = 'Texto'.slice(-1)
console.log(`\nUltima letra de uma string: ${lastChar}`)

const allWithoutLastChar = 'Texto'.slice(0,-1)
console.log(`\nExibe todas as letras da string menos a ultima: ${allWithoutLastChar}`)

const secondToEnd = 'Texto'.slice(1)
console.log(`\nExibe todas as letras da string a partir da segunda: ${secondToEnd}`)

//Retorna N caracteres a partir de uma posiçao
const twoCharsBeforeFirstPos = 'Texto'.substr(0, 2)
console.log(`\nAs duas primeiras letras são: ${twoCharsBeforeFirstPos}`)
