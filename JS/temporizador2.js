





function comenzarTiempo(){
  let segundos = document.getElementById("tiempoElegido").value;

  segundos = parseInt(segundos)*1000
    setTimeout(tiempoCumplido, segundos)

 
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
  let segundos = String(tiempoActual.getSeconds()).padStart(2,0);//si tiene menos de dos digitos, le ponga un cero
  let textoHora = hora + ":" + minutos + ":" + segundos
  elementoAlarma.textContent = textoHora;
  
}



