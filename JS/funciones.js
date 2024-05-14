function saludar(){
    document.write("<br>"+"hola a todos");
    despedir();
    //alert("Hola a todos")
   var val = prompt("ingrese un saludo")
   document.write("<br>"+"el saludo es: "+val)
}
function despedir(){
    document.write("<br>"+"Adios a todos");
}
saludar();
despedir();



let resultado;
function suma(num1,num2) {  
    num1=parseInt(prompt("ingrese primer numero"));
    num2=parseInt(prompt("ingrese segundo numero"));   
    resultado = num1+num2;
    alert ("el resultado es: "+resultado)
}
suma();



function mensaje(){
    document.write("<br>"+"este print esta dentro de la funcion mensaje");
   var mnsj= ("<br>"+"este es mi mensaje de la funcion mensaje")
   return mnsj; 

}

document.write(mensaje())


function verColor(valor){
valor=parseInt(prompt("ingrese un valor del 1 al 3"))

switch (valor){
case 1: return "rojo";
case 2: return "verde";
case 3:return "naranja";
default: return "numero no valido";
}

}
alert(verColor());

