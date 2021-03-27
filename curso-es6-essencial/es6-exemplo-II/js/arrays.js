const users = ['João','José','Pedro','Maria','Ana']

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name: 'João',
        age: 10,
        gender: gender.MAN
    },
    {
        name: 'José',
        age: 13,
        gender: gender.MAN
    },
    {
        name: 'Pedro',
        age: 14,
        gender: gender.MAN
    },
    {
        name: 'Maria',
        age: 15,
        gender: gender.WOMAN
    },
    {
        name: 'Ana',
        age: 18,
        gender: gender.WOMAN
    }
]

//retornar a quantidade de itens de um array:
console.log(`Itens: ${persons.length}`)

//verificar se é array:
console.log(`É array?: ${Array.isArray(persons)}`)

//iterar os itens do array
persons.forEach(person => {
    console.log(`Nome: ${person.name}`)
})

//filtrar o array
const mens = persons.filter(person => person.gender === gender.MAN)
console.log(`Nova lista apenas com homens: `, mens)

//Retornar um novo array
const personsWithCourse = persons.map(person => {
    person.course = 'Javascript'
    return person
})
console.log('Novo array com o atributo course inserido:', personsWithCourse)

//Transformar o array em outro tipo
const totalAge = persons.reduce((age, person) => {
    age += person.age
    return age
}, 0)

console.log(`Idade total das pessoas: ${totalAge}`)

//Concatenar operações
const totalEvenAges = persons
                        .filter(person => person.age % 2 === 0)
                        .reduce((age,person) => {
                            age += person.age
                            return age
                        }, 0)
console.log(`Soma das idades pares: ${totalEvenAges}`)