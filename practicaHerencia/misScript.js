class Animal {
    constructor(nombre, peso, edad) {
        this.nombre = nombre
        this.peso = peso;
        this.edad = edad;
    }

    informacion() {
        return `${this.nombre} - ${this.peso} kg.${this.edad} años`;
    }

}
//==========================================================//
//==========================================================//
    class Perro extends Animal {
    constructor(nombre, peso, edad, raza) {
        super(nombre, peso, edad)
        this.raza = raza;
    }
    informacion() {
        return `${this.nombre} - ${this.peso} kg.${this.edad} años\
        - ${this.raza}`;
    }
}
//==========================================================//
//==========================================================//
class Gato extends Animal {
    constructor(nombre, peso, edad, sexo) {
        super(nombre, peso, edad)
        this.sexo = sexo;
    }
    informacion() {
        return `${this.nombre} - ${this.peso} kg.${this.edad} años\
        - ${this.sexo}`;
    }
}
//==========================================================//
//==========================================================//
class Conejo extends Animal {
    constructor(nombre, peso, edad, color) {
        super(nombre, peso, edad)
        this.color = color;
    }
    informacion() {
        return `${this.nombre} - ${this.peso} kg.${this.edad} años\
        - ${this.color}`;
    }
}


let perro1 = new Perro ("clifor",20,12,"doberman")
let gato1 = new Gato("Tigre",12,6,"masculino")
let conejo1 = new Conejo("rabit", 4,1,"blanco")
let animales = [perro1,gato1,conejo1]




function mostraranimales(){
    let lista = document.getElementById("listaAnimales");

    for(let animal of animales)
     {
        let item = document.createElement("li");
        item.innerText = animal.informacion();
        lista.appendChild(item);
     }



}

    









