//declaração normal
function fn(){
    return console.log('Function fn executou!')
}
fn()

//declaração com arrow function (única instrução)
const fn2 = () => console.log('Function fn2 executou!')
fn2()

const fn3 = () => {
    //mais de uma instrução
    return console.log('Function fn3 executou!')
}
fn3()

//funções também são objetos
fn.prop = 'Nova prop'

console.log(fn())
console.log(fn.prop)

//passagem de parâmetros
const fn4 = value => console.log(value)
fn4('João')

const fn5 = fnParam => console.log(fnParam)
fn5(fn)

//receber e retornar funções (currying)
//recebe um primeiro parâmetro, memoriza e depois recebe outro
const controlFnExec = fnParam => allowed => {
    if(allowed){
        fnParam()
    }
}

const handleFnExecution = controlFnExec(fn)
handleFnExecution(true); //executa a função fn
handleFnExecution(); //não executa nada


//o próximo exemplo usa IIFE e não colocar ; nas funções acima estava causando erro de execução no código abaixo por ser interpretado
//como continuação de handleFnExecution()

//---------------
//Escopo de função

(() => {
    this.name = 'arrow function' // <------------------------------

    const getNameArrowFn = () => this.name //this.name aponta para a this no contexto deste bloco {}
    
    function getName(){
        return this.name //esse this vai fazer referência ao contexto onde foi executada
    }

    const user = {
        name: 'João',
        getNameArrowFn, //já a arrow function, continua apontando para o this do bloco {}
        getName         //no caso, o this vai ser apontado no contexto de user que é a propriedade name       
    }

    console.log(user.getNameArrowFn()) //exibiu o texto 'arrow function'
    console.log(user.getName()) //exibiu o texto 'João'
})();