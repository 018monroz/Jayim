
var nomMed,cantidad,periodicidad,dias,horas,horamed,fecha,btn_enviar;
var idMed=0;

window.onload=init;

function init(){
  btn_enviar=document.getElementById("btn_enviar");
  btn_enviar.addEventListener("click",enviarMed);
}

function enviarMed(){
  nomMed=document.getElementById("nomMed").value;
  cantidad=document.getElementById("cantidad").value;
  periodicidad=document.getElementById("periodicidad").value;
  dias=document.getElementById("dias").value;
  horas=document.getElementById("horas").value;
  horamed=document.getElementById("horamed").value;
  fecha=document.getElementById("fecha").value;

  document.getElementById("nomMed").value="";
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
  localStorage.setItem("med "+idMed,JSON.stringify(obj));
}
