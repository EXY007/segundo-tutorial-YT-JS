const fechaActual = new Date(); 

document.write(fechaActual);
document.write("<br>")
document.write("hoy es: "+ fechaActual.getDate());
document.write("<br>")
document.write("hoy es -_-  :"+ fechaActual.getMonth()+1); //este me concatena
document.write("<br>")
document.write("hoy es: ", fechaActual.getMonth()+1);
document.write("<br>")
document.write("hoy es: "+ (fechaActual.getMonth()+1));
document.write("<br>")
document.write("el año es : ", fechaActual.getFullYear());
document.write("<br>")
document.write("la hora eses : ", fechaActual.getHours(),":", fechaActual.getMinutes(),":",fechaActual.getSeconds());




