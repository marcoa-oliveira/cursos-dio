function soma (n1, n2){
    return n1 + n2
}

console.log(`5 + 10 = ${soma(5,10)}`)

let number = prompt('Qual número deseja saber o quadrado?')

function square(num){
    return num * num
}

console.log(square(number))

//manipulando elementos da página

// function botao(){
//     document
//         .getElementById('agradecimento')
//         .innerHTML = 'Obrigado por clicar!' //captura o elemento da página com o id 'agradecimento' e insere o texto dentro do elemento
// ---> alterado para uso de parâmetro

function botao(elemento){
    elemento
        .innerHTML = 'Obrigado por clicar!' //captura o elemento da página com o id 'agradecimento' e insere o texto dentro do elemento
}

function redir(){
    window.open('https://google.com.br') //abre uma nova aba no navegador com o link informado
}

// function trocar(){
//     document
//         .getElementById('mouseover')
//         .innerHTML = 'Passou o mouse aqui!'
// } ---> alterado para uso de parâmetro

function trocar(elemento){
    elemento
        .innerHTML = 'Passou o mouse aqui!'
}

// function voltar(){
//     document
//         .getElementById('mouseover')
//         .innerHTML = 'Não passe o mouse aqui, teimoso!'
// } ----> alterado para uso e parâmetro

function voltar(elemento){
    elemento
        .innerHTML = 'Não passe o mouse aqui, teimoso!'
}