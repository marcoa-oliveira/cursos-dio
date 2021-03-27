//if else e else if
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numbers.forEach(item => {
    if(item % 2 === 0){
        console.log(`O número ${item} é par`)
    } else {
        console.log(`O número ${item} é impar`)
    }
})


//switch case
var fruit = 'pera'

switch (fruit) {
    case 'banana':
        console.log('banana')
        break;
    
    case 'pera':
        console.log('pera')

    default:
        console.log('não cadastrado')
        break;
}

//for
for(var i = 0; i <= 10; i++){
    console.log('laço de repetição for: i = ', i)
}

//while
var x = 0
var n = 0
while (n < 3){
    n++
    x += n
    console.log('laço de repetição while: x = ', x)
}

//do while
var i = 0
do{
    i += 1
    console.log('laço de repetição do...while: i = ', i)
}while(i < 5)

//for in
let arr = [3, 5, 7]

for (let key in arr) {
    console.log(key) //0 1 2
}

//for of
for (let key of arr) {
    console.log(key) // 3 5 7
}