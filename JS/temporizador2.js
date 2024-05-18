





function comenzarTiempo(){
 
}

function tiempoCumplido(){
 //alert("Se Termino El Tiempo");
 let elementoAlarma = document.getElementById("txtAlarma");
 let elementoSonido = document.getElementById("audioAlarma");


elementoAlarma.style.color = "green";
elementoSonido.play();

}

function comezarReloj(){
  setInterval(tictac,1000)
}

function tictac(){
  let elementoAlarma = document.getElementById("txtAlarma");
  let tiempoActual = new Date();
  let hora = tiempoActual.getHours();
  let minutos = tiempoActual.getMinutes();
  let segundos = tiempoActual.getSeconds();
  let textoHora = hora + ":" + minutos + ":" + segundos
  elementoAlarma.textContent = textoHora;
  
}



