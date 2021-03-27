const symbol1 = Symbol()
const symbol2 = Symbol()

//Symbols são únicos
console.log(`\nsymbol1 é igual symbol2: ${symbol1 === symbol2}`)

//previnir conflitos entre nomes de propriedades
const nameSymbol1 = Symbol('name')
const nameSymbol2 = Symbol('name')

const userSymbol = {
    [nameSymbol1]: 'José',
    [nameSymbol2]: 'Outro nome',
    fullName: 'da Silva'
}

console.log(userSymbol)

//Symbols criam propriedades que não são enumberables
for(const key in userSymbol){
    if(userSymbol.hasOwnProperty(key)){
        console.log(`\nValor da chave: ${key}: ${userSymbol[key]}`)
    }
} // as propriedades Symbol não aparecem no for - in

// Symbols também não aparecem em .values() e .keys
console.log(`Propriedades do objeto userSymbol: `, Object.values(userSymbol))
console.log('Valores das propriedades do objeto usserSymbol: ', Object.keys(userSymbol))

//Mas são acessíveis com .getOwnPropertySymbols()
console.log('Symbols registrados no objeto userSymbol: ', Object.getOwnPropertySymbols(userSymbol))

//E utilizando Reflect.ownKeys() podemos acessar todas as propriedades com ou sem symbol
console.log('\nTodas as propriedades do objeto userSymbol: ', Reflect.ownKeys(userSymbol))