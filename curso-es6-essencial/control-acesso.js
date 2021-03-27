function Person(initialName){
    let name = initialName //------------> no node12 poderia ser declarado apenas #name

    this.getName = function(){
        return name
    }

    this.setName = function(newName){
        name = newName
    }
}

const p = new Person('Vicente')
console.log(p) //functions getName e setName
console.log(p.getName())
console.log(p.setName('Luiz'))
console.log(p.getName())
