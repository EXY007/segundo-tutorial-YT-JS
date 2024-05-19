class Persona{                               //clase
    nombre = "Homero"           
    apellido = "simpson"
    direccion = "Zamorano"                  //aributos/propiedades
    telefono = 5553472
    Email = "Luis@gmail.com"

    trabajar(){                                  //metodos
        return "trabaja en la planta nuclear";
    }

    estudiar(){
        return "escuel primaria sprinfil";
    }

}

const homero = new Persona();                    // objetos
const bart = new Persona();


document.write(homero.nombre+" "+homero.apellido)
document.write("<br>")
document.write(homero.trabajar())
document.write("<br>")
document.write("<br>")
document.write("bart ", bart.apellido)
document.write("<br>")
document.write("estudia en ", bart.estudiar()) 

