# Introdução ao Javascript

Conceitos básicos da linguagem. *Curso nível Básico*

## Objetivos
[] Entender como javascript funciona
[] Aprender a programar utilizando javascript *?*
[] Desenvolver páginas utilizando javascript

## Resumo

<details>
    <summary> Visualizar </summary>
        
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
</details>

## Array e Dicionário

<details>
    <summary> Visualizar </summary>

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
</details>

## Condicionais, laços de repetição de Date

<details>
    <summary>Visualizar</summary>

    ### if else

    


</details>