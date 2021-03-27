console.log(`Exemplo de uso do operador Soma: 5 + 5 = ${5+5}`)
console.log(`Exemplo de uso do operador Subtração: 10 - 5 = ${10-5}`)
console.log(`Exemplo de uso do operador Multiplicação: 10 * 5 = ${10*5}`)
console.log(`Exemplo de uso do operador Divisão: 10 / 5 = ${10/5}`)
console.log(`Exemplo de uso do operador Resto (Módulo): 10 % 3 = ${10%3}`)
let num = 0
num++
console.log(`Exemplo de uso do operador Atribuição de soma (++): num++ = ${num}`)
num--
console.log(`Exemplo de uso do operador Atribuição de subtração (--): num-- = ${num}`)
console.log(`Exemplo de uso do operador de Exponenciação: 10 ** 3 = ${10**3}`)
console.log(`Exemplo de uso do operador de Exponenciação: 10 ** -2 = ${10**-2}`)

//exemplos de uso Comparadores e condicionais

console.log(`Uso condicional ternário (?) e comparador AND (&&): string && string = ${'joão' && 'maria'? true : false}`)
console.log(`Uso condicional ternário (?) e comparador AND (&&): int && string = ${100 && '100'? true : false}`)
//retorna true pois a tipagem é fraca
console.log(`Uso condicional ternário (?) e comparador AND (&&): false && true = ${false && true? true : false}`)
console.log(`Uso condicional ternário (?) e comparador OR (||): false || true = ${false || true? true : false}`)
console.log(`Uso condicional ternário (?) e comparador NOT (!): !false = ${!false}`)

//string preenchida retorna TRUE

//Spread...
var partes = ['ombro','joelhos']
var musica = ['cabeça', ...partes, 'e', 'pés']
console.log(musica)

function fn(x, y, z){
    return console.log(`x = ${x} y = ${y} z = ${z}`)
}
var args = [1,2,3]
fn(...args)

//In

console.log(`'ombro' in musica = ${'ombro' in musica}`) //retorna false pois é necessário especificar a posição
console.log(`'Existe a posição 3' in musica = ${3 in musica}`) //true pois temos 'e' na posição 3 do array
console.log(`'length' in musica = ${"length" in musica}`) //true pois length é uma propriedade de array

//Objetos predefinidos
console.log(`'PI' in Math = ${'PI' in Math}`) //true

//Objetos personalizados
var meuCarro = {marca: 'Honda', modelo: 'Accord', ano: 1998}
console.log(`marca in meuCarro = ${'marca' in meuCarro}`) // true

//instanceof
var date = new Date(2021, 3, 20)
console.log(`date instanceof Date = ${date instanceof Date}`)


