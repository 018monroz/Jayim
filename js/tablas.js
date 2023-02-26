let citas = [];
let tablaCitas = document.getElementById("tablaCitas");
let tablaMedicamentos = document.getElementById("tablaMedicamentos");

var tipoCita,tipoCita,descripcion,nomMedico,tipoMedico,hora,fecha,lugar,btn_enviar;
function aggCita(obj){
  citas.push(obj);
}




window.onload=init;

function init(){
  btn_enviar=document.getElementById("btn_enviar");
  btn_enviar.addEventListener("click",enviarCita);
  console.log(btn_enviar.id);
}


function enviarCita(){
  tipoCita=document.getElementById("tipoCita").value;
  descripcion=document.getElementById("descripcion").value;
  nomMedico=document.getElementById("nomMedico").value;
  tipoMedico=document.getElementById("tipoMedico").value;
  hora=document.getElementById("hora").value;
  fecha=document.getElementById("fecha").value;
  lugar=document.getElementById("lugar").value;
  

  document.getElementById("tipoCita").value="";
  document.getElementById("descripcion").value="";
  document.getElementById("nomMedico").value="";
  document.getElementById("tipoMedico").value="";
  document.getElementById("hora").value="";
  document.getElementById("fecha").value="";
  document.getElementById("lugar").value="";




  /*
  var texto="Tipo de cita: "+tipoCita+"\n"+
            "Descripción: "+descripcion+"\n"+
            "Nombre del medico: "+nomMedico+"\n"+
            "Tipo de medico: "+tipoMedico+"\n"+
            "Fecha: "+fecha+"\n"+
            "Lugar: "+lugar;
  
  console.log(texto);*/
  var obj={
    Tipo_cita: tipoCita,
    Descripcion: descripcion,
    NomMedico: nomMedico,
    Tipo_medico: tipoMedico, 
    Fecha: fecha,
    Lugar: lugar,
    Hora: hora
  }
  aggCita(obj);
  localStorage.setItem("cita "+(localStorage.length+1),JSON.stringify(citas));
}
