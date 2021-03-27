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

## Tipos, Variáveis, Operadores, Condicionais e Repetição em ES6

### Tipos e Variáveis
    
- Primitivos
    - `string` *alguns métodos que podemos utilizar para manipular string: `.split(), .replace(), .slice(), .substr()`*
    - `number` *`.toString(), .toFixed()`*, *strings podem ser convertidas em number com métodos como `.parseInt(), .parseFloat()`*
    - `boolean`
    - `null`
    - `undefined`
    - `symbol` *um symbol não é igual ao outro. permite que propriedades de objetos não sejam sobrescritas. Propriedades Symbol também ficam inecessíveis por serem **enumberable** em determinadas situações como, por exemplo, estruturas `for in`, `Object.key()`, `Object.value()`,*

- `Object` *permite o registro de atributos e propriedades através de 'chave-valor' que podem ser acessadas `objeto.prop` ou `objeto['prop']`*
*alguns métodos de manipulação de objeto: `Object.keys(), Object.values(), Object.entries(), Object.assign(), Object.freeze(), Object.seal()`*
- `Function`
    - É possivel criar propriedades em funções
    - Podemos criar funções de duas formas:

    ```javascript
        //clássica:
        function fn(){
            return 'fn'
        }

        //arrow function
        const fn = () => console.log('fn')
        
        const fn2 = value => console.log(value)
        
        const fn3 = value => {
            //...outras instruções
            return value
        }
    ```

    - Arrow functions são formas mais enxutas de código, mas é importante levar em consideração o **contexto de criação (escopo)**
    - Enquanto `functions myfunction (){....}` considera que `this.variavel` se refere a variável **dentro do seu contexto de execução**, uma *arrow function* `const my function = () => {...}` considera que `this.variavel` é **a variável declarada dentro do mesmo bloco que a função**.

    ```javascript
    {//------começo do bloco {}
        this.texto = 'texto armazenado no this do bloco'

        const arrowImprimeTexto = () => this.texto

        function funcImprimeTexto(){
            return this.texto
        }

        const objTexto = {
            texto: 'texto do objeto',
            arrowImprimeTexto,
            funcImprimeTexto //<------ contexto de execução (executa dentro de objTexto)
        }
        
        console.log(objTexto.arrowImprimeTexto) // retorna 'texto armazenado no this do bloco'
        console.log(objTexto.funcImprimeTexto) // retorna 'texto do objeto'
    }//-------final do bloco{}
    ```
- `Array` *também é um objeto, mas permite a criação de várias outras estruturas de dados*
- Existem diversos métodos para trabalhar com arrays e iterar sobre eles, alguns deles são: `.lengh, Array.isArray(), .forEach(), .filter(), .map(), .reduce()`
- Operações podem ser concatenadas
- Seguindo o **princípio da imutabilidade** toda operação com arrays deve gerar um novo array, não alterando o original.

### Operadores

- Aritiméticos
    - *Operador binário*: recebe dois operandos `num1 + num2`, `num1 - num2`...
    - *Operador unário*: recebe apenas um operando `num1++`, `num1--` ou `++num1`, `--num1`
    - *Módulo*: `%`
    - *Incremento*: `++ ou --`
    - *Adição e Negação*: 
        ```javascript
            -3 //nega três.... 
            + "3" //retorna 3
            + true // retorna 1
            + false // retorna 0
            - true // retorna -1
        ```
    - *Exponenciação*: `**`, por exemplo:
        ```javascript
        2**3 //retorna 8 (2*2 = 4, 4*2 = 8)
        10**-1//retorna 0.1
        ```
    - *Operador de agrupamento*: `()`, por exemplo: `2 * (3 + 4)`    
- Atribuição: `+`
    - *Atribuição de adição*: `x += y` = `x = x + y`
    - *Atribuição de subtração*: `x -= y` = `x = x - y`
    - *Atribuição de multiplicação*: `x *= y` = `x = x * y`
    - *Atribuição de divisão*: `x /= y` = `x = x / y`
    - *Atribuição de resto*: `x %= y` = `x = x % y` 
- Comparação
    - *Igual*: `==`  igualdade simples por valor
    - *Não igual*: `!=` 
    - *Estritamente igual*: `===` igualdade entre valor e tipo
    - *Estritamente não igual*: `!==`
    - *Maior que*: `>`
    - *Maior ou Igual que:* `>=`
    - *Menor que*: `<`
    - *Menor ou Igual que:* `<=`
- Condicional
    - *Ternário*: `condição ? valor1 : valor2` Se a condição retornar `true`, o primeiro valor é retornado. Retornando `false`, retorna o segundo.
- Lógicos
    - *Operador E (AND)*: `&&` 
    - *Operador OU (OR)* `||`
    - *Operador NÃO (NOT)* `!`
    > string preenchida retorna `true`
- Spread
    `...` itera sobre arrays ou objetos e passar por parâmetro (espalhar)
- In
    `num in num2`: Avalia se o primeiro parâmetro existe dentro de um segundo e retorna `true` ou `false`
- instanceof
    verifica se um objeto é uma instância de alguma coisa `obj instanceof objType`

### Estruturas condicionai

- `if`, `else` e `else if`

```javascript
if(condicao){
    //se verdadeiro, executa o cod. deste bloco
} else if (condicao2){
    //executa outro teste e verifica se a condição é atendida, se sim, executa o código deste bloco
} else {
    //se nenhuma condição é atendida, executa este bloco
}
```

- `switch case`
```javascript
switch (key){
    case valor1:
        //...executa as instruções deste bloco se key for igual valor1
        break;
    case valor2:
        //...executa as instruções deste bloco se key for igual valor2
        break;
    default:
        //...executa as instruções deste bloco se key não atender nenhum outro case
        break;
}
```

### Estruturas de repetição

- for: *executa repetidamente uma instrução dentro de uma quantidade de vezes conhecida*
- while: *verifica primeiro, se a condição não foi atendida, executa o bloco*
- do ... while: *executa o bloco primeiro e verifica a condição depois*
- for ... in: *em arrays, retorna as posições (indices) do array*
- for ... of: *em arrays, retorna os atributos (valores) do array. se o valor não for enumberable, não executa*
- continue: *pula uma iteração do laço*
- break: *interrompe a execução do laço e sai dele*

## Orientação a Objetos e Design Pattern com ES6

### Introdução a Orientação a Objetos

- **Herança**
    - baseada em protótipos: 
    `prototype` - variável que armazena as definições do objeto
    `__proto__` - toda vez que criamos uma variável, ela possui essa referência que aponta para o prototype do *tipo* que foi criado
    `constructor` - baseado em um constructor é criado um prototype e nessa variável é armazenada a referência `__proto__`

```javascript
const myText = 'Hello!'
myText.split('') //<---- de onde vem esse split?
```

é a mesma coisa que:

```javascript
const myText = String('Hello!') //utiliza a função construtora String que carrega um prototype
console.log(myText.__proto__.split) //f split() { [native code] } carregado no prototype (__proto__) de String
```

`__proto__` -----> `prototype` -----> `constructor`
*-----> referência*

Quando criamos uma *função*, ela também faz uso de um `constructor` para ser criada, sendo assim:

`myFunction` -----> `Function` -----> `Function.prototype.constructor` -----> `Object(){}` -----> `Object.prototype = null`

*Funções são objetos que podem ser chamados com atributos passados por parâmetro*

**new**

`const cachorro = new Animals()`
    - Cria um novo objeto a partir da função construtora e o prototype e herdado.
    - O contexto de `.this` é atrelado ao contexto do novo objeto
    - Se houver um `return` explícito no construtor, prevalece o valor do return

Conseguimos também verificar de quem um objeto é instância:

`cachorro instanceof Animals`

**.call**

`Animals.call(this,4)`
    - Chama a função Animals dentro do construtor de Cachorros, e vincula ao contexto do novo objeto
    - Quando criamos um novo objeto de Cachorros, esse objeto possui os atributos da função Cachorros e os atributos de Animals

**definições no prototype**

Toda vez que criamos um objeto, as funções presentes dentro do contrutor da Função são recriadas no objeto. Podemos evitar isso passando as funções no prototype.

```javascript
function Animals(){}
Animals.prototype.qtdPatas = 0
Animals.prototype.movimentar = function(){}

function Cachorros(morde){
    this.qtdPatas = 4
    this.morde = morde
}

Cachorros.prototype = Object.create(Animals)
Cachorros.prototype.latir = function(){
    console.log('au au!')
}

const pug = new Cachorros(false)
```

No exemplo acima, em `Animals` definimos os atributos e funções **default** da função. Já em `Cachorros`, passamos a quantidade de patas e o atributo `morde` que é passado por parâmetro. Porém, definimos no prototype, que `Cachorros` **é derivado** de `Animals` e por isso, um objeto criado a partir de Cachorros irá possuir os atributos e funções tanto de Animals quanto de Cachorros.

Esta abordagem permite que, em caso de novos atributos serem adicionados em Animals, qualquer objeto de Cachorro passará a tê-los também, incluindo as instâncias já declaradas.

**É preciso tomar cuidado com o uso do prototype, principalmente em relação a sobrescrita de métodos e atributos nativos**

- **Classes**

    - criado no ES6
    - simplificação da herança de protótipos
    - palavra chave `class`
    - `extends`: informa que uma classe deriva de outra herdando seus métodos e atributos

```javascript
class Animals{
    constructor(qtdPatas){
        this.qtdPatas = qtdPatas
    }

    movimentar(){
        return console.log('Moveu!')
    }
}

class Cachorros extends Animals{
    constructor(morde){
        super(4) //[this.qtdPatas]
        this.morde = morde
    }

    latir(){
        return console.log('au au!')
    }
}

const pug = new Cachorros(false)
console.log(pug) //qtdPatas: 4, morde: false
console.log(pug.movimentar()) //Moveu!
console.log(pug.latir())//au au!
```

- **Modificadores de Acesso**

    - Javascript não tem controladores de acesso com suporte no browser
    - NodeJS v12 (usando o # na frente da variável define ela como privada)
    - privado/público dentro da classe


- **Encapsulamento**

    - oculta detalhes do funcionamento interno

```javascript
function Person(initialName){
    var name = initialName

    Object.defineProperty(this,'name', {
        get: function(){
            return name
        },
        set: function(value){
            name = value
        }
    })
}
```

é o mesmo que o exemplo encapsulado abaixo:

```javascript
class Person {
    #name = ''

    constructor(name){
        this.#name = name
    }

    get name(){
        return this.#name
    }

    set name(name){
        this.#name = name
    }
}
```

- **Static**

    - Permite acessar métodos e atributos sem instanciar uma classe.

```javascript
    class Person{
        static walk(){  //antes eu teria de fazer Person.walk = function(){...}
            console.log('andou!')
        }
    }

    console.log(Person.walk()) //andou!
```
