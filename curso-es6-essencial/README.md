# Javascript ES6 Essencial

> Conhecendo a extensão ES6 do javascript. *Nível Intermediário*

## História e conceitos

 - 1995
 - Brandan Eich
 - ECMAScript (*especificação da linguagem*)
 - TC39 *comitê responsável pela evolução do JS, desenvolver e manter integrações*
 - Fluxo de proposta
    - **Stage 0**: strawman
    - **Stage 1**: proposal (*proposta formal da funcionalidade*)
    - **Stage 2**: draft (*primeira versão da proposta que vai para especificação.*)
    - **Stage 3**: candidate (*proposta completa, quase em ponto de ir para implementação*)
    - **Stage 4**: finish (*proposta concluida e testada*)

- ES2018: ultima especificação aprovada
    - Operadores `rest` e `spread`
    - Iteração assíncrona
    - `Promise.prototype.finally()`

- ES.Next: *especificação que possui futuras implementações*
- Babel: transpilador javascript

### Conceitos da linguagem

- **Linguagem interpretada**: O código é executado de cima pra baixo e o resultado é imediatamente retornado

- **Linguagem de tipagem fraca e dinâmica**: Na tipagem **fraca** não há verificação em todas as operações. Podemos tomar como exemplo o código abaixo, onde não há verificação no operador matemático **soma (+)**. *Em uma linguagem de tipagem forte, um erro seria retornado*. Outro ponto da tipagem em javascript é o fato de ser **dinâmica**, ou seja, não há a necessidade de declarar o tipo de variável no momento da criação, isso será determinado no momento em que um valor for atribuído (**inferência de tipo**).
    
    ```javascript
    //exemplo
    let nome = 'Joao' //<------ neste momento a variável nome é atribuída como String
    let idade = 20 //<------ nesse momento a variável idade é atribuída como int
    console.log(nome + idade) //console: Joao20
    ```
- **Typescript**: é um superset da linguagem JS. Adiciona tipos em tempo de desenvolvimento e funcionalidades que o JS não possui por padrão.

- **Flow**: semelhante ao TS na chegagem de tipos, uma versão simplificada.

- **Funções de primeira classe e ordem maior**:
    - *Função de Primeira Classe*: pode ser atribuida a uma variável, a uma estrutura de dados, passada por argumento ou retornada por outras funções.

    ```javascript
    function getName(){
        return 'João da Silva'
    }

    function logFn(fn){
        console.log(fn())
    }

    const logFnResult = logFn //atribuindo a função a uma variável

    const obj = {
        logFn: logFn //atribuindo a função a uma estrutura de dados
    }

    const arr = [ logFn ] //atribuindo a função a um array

    logFnResult(getName) //passando a função como argumento
    ```

    - *Closure*: **"Escopo léxico"** - capacidade de uma função lembrar do ambiente onde foi criada
        - *Escopo Global*
        - *Escopo de Função*
        - *Escopo de Bloco*

    ```javascript
    function init(){
        const exemplo = 'Essa variável' //<----- variável acessível apenas dentro do escopo da função
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
    ``` 

## Currying, Hoisting, Imutabilidade, Tipos e Variáveis

- **Currying**: técnica de transformar uma função com N parâmetros em uma que receba apenas um e que a cada parâmetro recebido, retorna uma nova função que recebe outro.

```javascript
function soma(a){
    return function(b){
        return console.log(a+b)
    }
}

const soma2 = soma(2) //<---- executa a função soma passando o valor 2 (a = 2) esse valor fica memorizado
soma2(2) //retorna 2 + 2
soma2(3) //retorna 2 + 3
soma2(4) //retorna 2 + 4
soma2(5) //retorna 2 + 5
```

- **Hoisting**: (*levantar ou suspender algo*) Comportamento JS na *declaração de funções e variáveis*. São elevadas em seu escopo. Assim, permite o uso da variável ou função 'antes' de sua declaração.

    - *Hoisting Variáveis*: só eleva a criação da variável, não a atribuição. Nesse caso, chamar uma variável antes da atribuição gera um erro de `undefined` pois a variável existe, mas não tem valor atribuído.
    - *Hoisting Funções*: sobe ao topo como um todo. Assim, a função é executada quando chamada, mesmo que a chamada seja feita antes de sua declaração.

```javascript
//exemplo de hoisting com variáveis
// var hoistNum ------------------------------------ içado para cima mas sem o valor atribuido (hoisting) 
console.log(hoistNum) //undefined ------------------ pois a chamada da variável veio antes da atribuição
var hoistNum = 'agora tem valor em hoistNum' // ---- hoistNum = 'agora...' nesse momento há a atribuição de valor
console.log(hoistNum) //'agora tem valor em hoistNum' ----- e agora esse valor passa a ser acessível
```

```javascript
//exemplo de hoisting com funções
// function exibeTexto(){ //-------------------------- o bloco da função é içado por completo para cima
//     return console.log('texto exibido')
// }

exibeTexto() //console: texto exibido  --------------- a função fica acessível pois foi içada para cima

function exibeTexto(){ // ---------------------------- vai pra cima em tempo de execução
    return console.log('texto exibido')
}
```
- **Imutabilidade**: Em linguagens funcionais, as variáveis nunca vão mudar. Se é preciso mudar, cria-se uma nova variável baseada no original com a mudança desejada. O mesmo vale para objetos.

```javascript
let arr = ['banana','maçã','goiaba'] // array original
let arrNovo = arr.pop() //array novo baseado no original com o ultimo elemento removido ['banana','maçã']
```

- **Tipos e Variáveis**
    - *Variáveis*:
        - `var` - escopo **global**, não respeita escopo de bloco
        - `let` - escopo de **bloco**
        - `const` - escopo de **bloco**, atributo imutavel, porém se a variável declarada for um **objeto ou array**, é possível alterar as propriedades desse objeto. O que é imutável nesse caso é o apontamento da variável na memória.

```javascript
//escopo global

{
    //escopo de bloco
}

function test(){
    //escopo de função
}
``` 
