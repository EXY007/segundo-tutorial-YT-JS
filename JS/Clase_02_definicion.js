//let mihoja2 = new Papel(67,76);
//esta es una declaracion de clase
class Papel {
    constructor(alto,ancho){
        this.alto = alto
        this.ancho = ancho
    }

     suma (num1,num2) {
        return num1+num2
        
    }

}

let mihoja = new Papel(67,76); //no les hace caso a esos argumentos en el caso no tenga constructor
console.log(mihoja.suma(3,5))




/*en consola hago: let papel01 = new Papel_A(5,9)
cuando creo papel y escribo papel01. (le doy el punto al final)
ya me da que tiene alto y ancho.. cosa que no puedo hacer si
hago lo mismo del punto con Papel_A (aplica igual para el ejem de arriba)*/
//esta es una expresion de clase anonima
let Papel_A = class{

    constructor (alto,ancho){
        this.alto = alto
        this.ancho = ancho
    }
}

//esta es una expresion de clase nombrada
let Papel_B = class Papel_X{

    constructor (alto,ancho){
        this.alto = alto
        this.ancho = ancho
    }
}


//aqui si infliye el orde,
//no puedo invocar antes de declarar
//ejemplo en primera linea