var tipoCita,tipoCita,descripcion,nomMedico,tipoMedico,hora,fecha,lugar,btn_enviar;
var idcita=0;

window.onload=init;

function init(){
  btn_enviar=document.getElementById("btn_enviar");
  btn_enviar.addEventListener("click",enviarCita);
}

function enviarCita(){

  tipoCita=document.getElementById("tipoCita").value;
  descripcion=document.getElementById("descripcion").value;
  nomMedico=document.getElementById("nomMedico").value;
  tipoMedico=document.getElementById("tipoMedico").value;
  hora=document.getElementById("hora").value;
  fecha=document.getElementById("fecha").value;
  lugar=document.getElementById("lugar").value;

  if(verificarCita(tipoCita)==false || verificarMedico(tipoMedico)==false || descripcion=="" || nomMedico=="" || hora=="" || fecha==""  || lugar=="" ){
    alert("campos en blanco o no validos");
  }else{
      
    document.getElementById("tipoCita").value="";
    document.getElementById("descripcion").value="";
    document.getElementById("nomMedico").value="";
    document.getElementById("tipoMedico").value="";
    document.getElementById("hora").value="";
    document.getElementById("fecha").value="";
    document.getElementById("lugar").value="";

    var obj={
      Tipo_cita: tipoCita,
      Descripcion: descripcion,
      NomMedico: nomMedico,
      Tipo_medico: tipoMedico, 
      Fecha: fecha,
      Lugar: lugar,
      Hora: hora
    }
    try {
      idcita=JSON.parse(localStorage.getItem("idCita").toString());
      localStorage.setItem("idCita",(idcita+1));
    } catch (error) {
      idcita=0;
      localStorage.setItem("idCita",idcita+1);
    }
    localStorage.setItem("cita "+(idcita+1),JSON.stringify(obj));

  }
}
function verificarCita() {
  var input = document.getElementById("tipoCita").value;
  var opciones = document.getElementById("opciones-consultas").options;
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
function verificarMedico() {
  var input = document.getElementById("tipoMedico").value;
  var opciones = document.getElementById("opciones-medicos").options;
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
