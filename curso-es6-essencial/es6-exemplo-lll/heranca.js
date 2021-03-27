//Construtores e prototype

const myText = String('Hello!')
console.log(myText.__proto__.split) //retorna [Function: split]

//---------------------------------------------------------------

//Construtores de Funções

function animal(){}
console.log(animal.constructor) // retorna [Function: Function]

//---------------------------------------------------------------

//New

function Animals(qtdPatas){
    this.qtdPatas = qtdPatas
}

const cachorro = new Animals(4)
console.log(cachorro.qtdPatas) //4

console.log(cachorro.__proto__ === Animals.prototype) //true pois __proto__ de cachorro faz referência ao prototype de Animals
console.log(Animals.__proto__ === Function.prototype) //true pois __proto__ de Animals faz referência ao prototype de Function

//---------------------------------------------------------------

//instanceof
console.log(cachorro instanceof Animals)//true

//---------------------------------------------------------------

//.call

function Cachorros(morde){ //função construtora derivada de Animals
    Animals.call(this,4) //chama a função Animals passando o contexto do novo objeto (no caso, pug), assim a qtdPatas é inserida em pug
    this.morde = morde
}

const pug = new Cachorros(false) //objeto criado herdando propriedades de Animals e Cachorros
console.log(pug)

//-----------------------------------------------------------------
function Animals(){}
Animals.prototype.qtdPatas = 0 //informa uma quantidade de patas padrão 
Animals.prototype.movimentar = function(){} //informa as funções padrão 

function Cachorros(morde){
    this.qtdPatas = 4
    this.morde = morde
}

Cachorros.prototype = Object.create(Animals) //define que a função Cachorros é derivada de Animals, e herda os atributos de Animals
Cachorros.prototype.latir = function(){
    console.log('au au!')
}

const pug = new Cachorros(false) //qualquer alteração em Animals refletirá em pug
console.log(pug)