//funções de primeira classe e ordem maior

function getName(){
    return 'João da Silva'
}

function logFn(fn){
    console.log(fn())
}

const logFnResult = logFn

logFnResult(getName)

//---------------------

// Closure e Escopo

function init(){
    const exemplo = 'Essa variável'

    return function(){
        console.log(`1 - O valor da variável exemplo é ${exemplo}`)
        
        return function(){
            console.log(`2 - O valor da variável exemplo é ${exemplo}`)

            return function(){
                console.log(`3 - O valor da variável exemplo é ${exemplo}`)
            }
        }
    }
}

const initFn1 = init()
const initFn2 = initFn1()
const initFn3 = initFn2()

initFn3()

//--------------------

//Currying

function square(exp){
    return function(base){
        return console.log(`${base}^${exp} = ${Math.pow(base, exp)}`)
    }
}

const squareto2 = square(2)
squareto2(3)
squareto2(4)
squareto2(5)
squareto2(6)

function soma(a){
    return function(b){
        return console.log(a+b)
    }
}

const soma2 = soma(2)
soma2(2)
soma2(3)
soma2(4)
soma2(5)

//--------------------------------------

//hoisting

console.log(hoistNum) //undefined
var hoistNum = 'agora tem valor em hoistNum'
console.log(hoistNum) //'agora tem valor em hoistNum'

//--------------------------------------

//imutabilidade
var textoVar = 'texto guardado em uma variável VAR' //acessível em qualquer parte do código

const user = {
    name: 'João',
    lastName: 'da Silva'
}

function getUserWithFullName(user){
    return {
        ...user, //spread operator
        fullname: `${user.name} ${user.lastName}` //altera as propriedades do objeto, mesmo sendo const
    }
}

const userWithFullName = getUserWithFullName(user)
console.log(userWithFullName)

function exibeTextoVar(){
    return console.log(textoVar)
}

function exibeTextoLet(){
    let textoLet = 'texto guardado em uma variável LET' //só existe dentro do bloco da função e é inacessível fora dele
    return console.log(textoLet)
}

exibeTextoVar()
console.log(textoLet) //vai exibir um erro avisando que textoLet não foi declarado
exibeTextoLet()