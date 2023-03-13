
var nomMed,cantidad,periodicidad,dias,horas,horamed,fecha,btn_enviar;
var idMed=0;
nomMed=document.getElementById("tipoMedicamento");
cantidad=document.getElementById("cantidad");
periodicidad=document.getElementById("periodicidad");
dias=document.getElementById("dias");
horas=document.getElementById("horas");
horamed=document.getElementById("horamed");
fecha=document.getElementById("fecha");
window.onload=init;

function init(){
  btn_enviar=document.getElementById("btn_enviar");
  btn_enviar.addEventListener("click",enviarMed);
}

function enviarMed(){
  const tiempoTranscurrido = Date.now();
  const fe = new Date(fecha.value);
if(verificarMed(nomMed.value)==false || cantidad.value=="" || periodicidad.value=="" || horamed.value=="" || fecha.value=="" || (fe.getTime()<tiempoTranscurrido)){
  alert("campos en blanco o no validos");
}else{
  var obj={
    Nombre_medico: nomMed.value,
    Cantidad: cantidad.value,
    Periodicidad: periodicidad.value,
    Dias: dias.value, 
    Horas: horas.value,
    Horamed: horamed.value,
    Fecha: fecha.value
  }
  if(JSON.parse(localStorage.getItem("idMed"))==null){
    idMed=0;
    localStorage.setItem("idMed",idMed+1);
  }else{
    idMed=JSON.parse(localStorage.getItem("idMed"));
    localStorage.setItem("idMed",(idMed+1));
  }
  localStorage.setItem("med "+(idMed+1),JSON.stringify(obj));
  clear();
}
}
function clear(){
  nomMed.value="";
  cantidad.value="";
  periodicidad.value="";
  dias.value="";
  horas.value="";
  horamed.value="";
  fecha.value="";
}
function verificarMed(nomMed) {
  var opciones = document.getElementById("opciones-medicamento").options;
  var encontrado = false;
  for (var i = 0; i < opciones.length; i++) {
    if (nomMed === opciones[i].value) {
      encontrado = true;
      break;
    }
  }
  if (encontrado) {
    return true;
  } else {
    return false;
  }
}