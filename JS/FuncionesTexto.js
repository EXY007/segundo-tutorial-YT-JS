//cambiar valores de un texto
var nombre = "mi nombre es Luis Fernando Medina "
nombre = nombre.replace("Luis", "Pedro")
document.write(nombre)
document.write("<br>")

var nombre2 = "mi nombre es Luis Fernando Medina"
document.write(nombre.replace("mi","su"))
document.write("<br>")

//MAYUS Y MINUS
document.write(nombre.toUpperCase());
document.write("<br>")
document.write(nombre.toLowerCase());
document.write("<br>")

document.write(nombre.concat(nombre2))


