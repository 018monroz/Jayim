
var nomMed,cantidad,periodicidad,dias,horas,horamed,fecha,btn_enviar;
var idMed=0;

window.onload=init;

function init(){
  btn_enviar=document.getElementById("btn_enviar");
  btn_enviar.addEventListener("click",enviarMed);
}

function enviarMed(){
  nomMed=document.getElementById("tipoMedicamento").value;
  cantidad=document.getElementById("cantidad").value;
  periodicidad=document.getElementById("periodicidad").value;
  dias=document.getElementById("dias").value;
  horas=document.getElementById("horas").value;
  horamed=document.getElementById("horamed").value;
  fecha=document.getElementById("fecha").value;

if(verificarMed(nomMed)==false || cantidad=="" || periodicidad=="" || horamed=="" || fecha==""){
  alert("campos en blanco o no validos");
}else{
  
  document.getElementById("tipoMedicamentos").value="";
  document.getElementById("cantidad").value="";
  document.getElementById("periodicidad").value="";
  document.getElementById("dias").value="";
  document.getElementById("horas").value="";
  document.getElementById("horamed").value="";
  document.getElementById("fecha").value="";
  
  var obj={
    Nombre_medico: nomMed,
    Cantidad: cantidad,
    Periodicidad: periodicidad,
    Dias: dias, 
    Horas: horas,
    Horamed: horamed,
    Fecha: fecha
  }
  try {
    idMed=JSON.parse(localStorage.getItem("idMed").toString());
    localStorage.setItem("idMed",(idMed+1));
  } catch (error) {
    idMed=0;
    localStorage.setItem("idMed",idMed+1);
  }
  localStorage.setItem("med "+(idMed+1),JSON.stringify(obj));
}

}
function verificarMed() {
  var input = document.getElementById("tipoMedicamento").value;
  var opciones = document.getElementById("opciones-medicamentos").options;
  var encontrado = false;

  for (var i = 0; i < opciones.length; i++) {
    if (input === opciones[i].value) {
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