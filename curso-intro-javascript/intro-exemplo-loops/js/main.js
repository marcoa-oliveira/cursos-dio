var idade = prompt('Informe sua idade:')
if (idade >= 18){
    alert('maior de idade!')
} else {
    alert('menor de idade!')
}

//pode ser reescrita assim (operador condicional ternário)
//idade >= 18 ? alert('maior de idade') : alert('menor de idade')

//estrutura de repetição: while --- repete uma instrução enquanto a condição não for falsa
var count = 0

while(count <= 5){
    console.log(count)
    count++
}

//estrutura de repetição: for
for (var x = 0; x <=10; x++) {
    console.log(`x = ${x}`)    
}

//lidando com datas
var d = new Date()
console.log(d)
console.log(d.getMonth()) //retorna o mês (0) janeiro a (11) dezembro
console.log(d.getDay()) //retorna o dia da semana (0) domingo a (6) sábado
console.log(d.getDate()) //retorna o dia do mês
console.log(d.getFullYear()) //retorna o ano com 4 digitos
console.log(d.getHours()) //retorna a hora