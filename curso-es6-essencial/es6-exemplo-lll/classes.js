//convertendo o exemplo Animals para Classe

class Animals{
    constructor(qtdPatas){
        this.qtdPatas = qtdPatas
    }

    movimentar(){
        return console.log('Moveu!')
    }
}

//convertendo o exemplo Cachorros para Classes e Herança de Protótipo

class Cachorros extends Animals{ //Cachorros deriva (extende) de Animals
    constructor(morde){
        super(4) //Chama o construtor da classe extendida e passa o parâmetro (no caso, a qtd de patas) [this]
        this.morde = morde
    }

    latir(){
        return console.log('au au!')
    }
}

const pug = new Cachorros(false)
console.log(pug)
console.log(pug.movimentar())
console.log(pug.latir())