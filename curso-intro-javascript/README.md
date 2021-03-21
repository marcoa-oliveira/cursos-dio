# Introdução ao Javascript

Conceitos básicos da linguagem. *Curso nível Básico*

## Objetivos
[] Entender como javascript funciona
[] Aprender a programar utilizando javascript *?*
[] Desenvolver páginas utilizando javascript

## Resumo
        
Linguagem de script multplataforma que é executada *client-side*, pode interagir com **elementos de página html** incluindo seus atributos e estilização CSS.
Essa interação acontece através da **DOM** (*Document Object Model*)

#### Exemplo I

- Utilização da tag `<script>` e `<script src=''>`
    - `<script>` permite inserir *javascript dentro do código html*
    - `<script src=''>` permite utilizar um *arquivo javascript externo*
- Utilização de variáveis
    - *Tipágem dinâmica*
- Console.log
- Concatenação de string
- `.replace()`, `toLowerCase()`, `toUpperCase()`

## Array e Dicionário

### Declaração de Array

Arrays são declarados com `[]`, exemplo: `var lista = ['laranja','pera']` e podemos acessar seus itens internos pela **posição no array**, utilizando o **nome da variável** acompanhado de `[posição do item]`.

```javascript
//exemplo
var lista = ['laranja', 'pera', 'uva']
console.log(lista[0]) //console: laranja
```
### Manipulação básica de arrays

#### .push()

Podemos **adicionar itens** em um array utilizando o **método** `.push()`. Os itens são adicionados na **ultima posição** do array.

```javascript
lista.push('maçã')
console.log(lista) //console: ["laranja", "pera", "uva", "maçã"]
```

#### .pop()

Para **remover** o ultimo item do array, utilizamos `.pop()`. 

```javascript
lista.pop()
console.log(lista) //console: ["laranja","pera","uva"]  --- maçã foi removido
```

#### .length

Retorna a quantidade de itens no array.

```javascript
console.log(lista.length) //console: 3
```

#### .reverse()

Retorna o array em ordem invertida.

```javascript
console.log(lista.reverse()) //console: ["uva","pera","laranja"]
```

#### .toString() e .join()

`toString()` converte o array em string, separando os elementos por vírgula. Já `.join()` realiza a mesma conversão, mas permite a passagem de um separador como parâmetro.

```javascript
console.log(lista.toString()) //console: laranja,pera,uva
console.log(lista.join(' - ')) //console: laranja - pera - uva
```

### Dicionário

Um array onde temos uma **chave** *propriedade: valor* e podemos acessar o atributo pelo nome da propriedade.

```javascript 
var fruta = {nome: 'maça', cor: 'vermelha'}
console.log(fruta.nome) //maça
```

Podemos também ter um array com uma **lista de dicionários**

```javascript
var frutas = [
    {nome:'maçã', cor:'vermelha'},
    {nome:'uva', cor:'roxa'},
    {nome:'goiaba', cor:'verde'},
    {nome:'banana', cor:'amarela'}
]

console.log(frutas) //console: (4) [{...},{...},{...},{...}]  --- cada {...} representa um itém da lista
console.log(frutas[1].nome) //console: uva  --- exibe o valor da propriedade nome na posição 1 do array
```


## Condicionais, laços de repetição de Date

### if else

Condicional que **avalia se uma determinada condição é atendida** para executar uma determinada operação. Caso contrário, executa outra ou simplesmente pula o trecho de código da condição.

```javascript
var idade = prompt("Informe sua idade"); //exibe uma caixa de texto no navegador para a entrada de dados
if (idade >= 18){
    alert('maior de idade!')
} else {
    alert('menor de idade!')
}

//mas também pode ser escrito com um operator ternário:
idade >= 18 ? alert('maior de idade') : ('menor de idade')
```

### Laços de Repetição

Repetem a execução de um trecho de código enquanto uma determinada condição não for atendida para a interrupção.

#### while()

`while()` executa a instrução interna enquanto a condição for verdadeira. *No caso do exemplo abaixo, enquanto count for menor ou igual 5, ele repete a instrução*

```javascript
var count = 0

while(count <= 5){
    console.log(count)
    count++
}
```
#### for()

`for()` faz a mesa operação que o *while*, a diferença é que a quantidade de repetições é conhecida na declaração das condições.

```javascript
for (var x = 0; x <=10; x++) {
    console.log(`x = ${x}`)    
}
```

### Datas

`new Date()` cria uma instância do tipo data que representa um momento único de tempo. *No caso do exemplo abaixo, a variável `d` recebe o tempo presente* Os métodos de acesso de `Date` possibilitam os seguintes retornos:

```javascript
var d = new Date()
console.log(d)
console.log(d.getMonth()) //retorna o mês (0) janeiro a (11) dezembro
console.log(d.getDay()) //retorna o dia da semana (0) domingo a (6) sábado
console.log(d.getDate()) //retorna o dia do mês
console.log(d.getFullYear()) //retorna o ano com 4 digitos
console.log(d.getHours()) //retorna a hora
```

