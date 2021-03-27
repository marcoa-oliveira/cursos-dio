let user = {
    name: 'João'
}

console.warn( user )

//alterando a propriedade de um objeto
user.name = 'José'
console.log('Propriedade de user alterada!')
console.log(user)
user[ 'name' ] = 'Daniel'
console.log('Propriedade de user alterada!')
console.log(user)

//criando uma propriedade
user.lastName = 'da Silva'
console.log('Propriedade criada em user!')
console.log(user)

//deletando uma propriedade
delete user.name;
console.log('Propriedade deletada em user!')
console.log(user)

//-----------------------

const user2 = {
    name: 'João',
    lastName: 'dos Santos'
}

//Recupera as chaves de um objeto
console.warn(`\nPropriedades do objeto user2: ${Object.keys(user2)}`)

//Recupera valores das chaves do objeto
console.log(`\nValores das propriedades do objeto user2: ${Object.values(user2)}`)

//Retorna um array de arrays contendo [nome_prop, valor_prop]
console.log(`\nLista de propriedades e valores: ${Object.entries(user2)}`)

//Mergear propriedades do objeto
Object.assign(user2, {fullName: 'João dos Santos'})

console.log('\nAdiciona a propriedade fullName ao objeto user2:', user2)
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos:', Object.assign({}, user2, {age: 26}))

//Previne alterações em um objeto
const newObj = { foo: 'bar'}
Object.freeze(newObj)

newObj.foo = 'change'
delete newObj.foo

console.log('Variável newObj após alterações:', newObj)

//permite apenas a alteração de propriedades já existentes
const person = {
    name: 'Guilherme'
}

console.log('\nVariável person antes do uso de Object.seal()', person)

Object.seal(person)

person.name = 'Vicente'
delete person.name
person.age = 2

console.log('\nVariável person após alterações:', person)