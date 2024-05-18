





function comenzarTiempo(){
    let segundos = document.getElementById("tiempoElegido").value;

  segundos = parseInt(segundos)*1000
    setTimeout(tiempoCumplido, segundos)

}

function tiempoCumplido(){
   //alert("Se Termino El Tiempo");
   let elementoAlarma = document.getElementById("txtAlarma");
   let elementoSonido = document.getElementById("audioAlarma");

   elementoSonido.play();
  elementoAlarma.textContent = "ENCENDIDO!";
  elementoAlarma.style.color = "green";




  /*
  var elementoAlarma = document.getElementById("txtAlarma");
   elementoAlarma.textContent = "ENCENDIDO!";
   elementoAlarma.style.color = "green";
  */



  
}