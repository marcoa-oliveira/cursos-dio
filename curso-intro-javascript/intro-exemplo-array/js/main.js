var lista = ['pera','laranja','uva']

//imprime todo o array no console
console.log(lista)

//imprimir só pera
console.log(lista[0])

//adiciona maçã à ultima posição do array
lista.push('maçã')
console.log(lista)

//remove maçã da lista
lista.pop()
console.log(lista)

//informa o tamanho do array
console.log(lista.length)

//Converter o array em string com separador padrão (,) ou informando o separador entre os itens
console.log(lista.toString())
console.log(lista.join(' - '))

//dicionário
var fruta = {nome: 'maça', cor: 'vermelha'}
console.log(fruta)
console.log(fruta.nome)

//lista de dicionários
var frutas = [
    {nome:'maçã', cor:'vermelha'},
    {nome:'uva', cor:'roxa'},
    {nome:'goiaba', cor:'verde'},
    {nome:'banana', cor:'amarela'}
]

console.log(frutas)
console.log(frutas[1].nome)