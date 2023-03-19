var tipoCita,tipoCita,descripcion,nomMedico,tipoMedico,hora,fecha,lugar,btn_enviar;
var idcita=0;

tipoCita=document.getElementById("opciones-consultas");
descripcion=document.getElementById("descripcion");
nomMedico=document.getElementById("nomMedico");
tipoMedico=document.getElementById("opciones-medicos");
hora=document.getElementById("hora");
fecha=document.getElementById("fecha");
lugar=document.getElementById("lugar");
window.onload=init;

function init(){
  btn_enviar=document.getElementById("btn_enviar");
  btn_enviar.addEventListener("click",enviarCita);
}

function enviarCita(){

  const tiempoTranscurrido = Date.now();
  const fe = new Date(fecha.value);
  if(tipoCita.value=="" || tipoMedico.value=="" || descripcion.value=="" || nomMedico.value=="" || hora.value=="" || fecha.value==""  || lugar.value=="" || (fe.getTime()<tiempoTranscurrido)){
    alert("campos en blanco o no validos");
  }else{
    var obj={
      Tipo_cita: tipoCita.value,
      Descripcion: descripcion.value,
      NomMedico: nomMedico.value,
      Tipo_medico: tipoMedico.value,
      Fecha: fecha.value,
      Lugar: lugar.value,
      Hora: hora.value
    }
    if(JSON.parse(localStorage.getItem("idCita"))==null){
      idcita=0;
      localStorage.setItem("idCita",idcita+1);
    }else{
      idcita=JSON.parse(localStorage.getItem("idCita").toString());
      localStorage.setItem("idCita",(idcita+1));
    }
    localStorage.setItem("cita "+(idcita+1),JSON.stringify(obj));
    clear();
  }
}
function clear(){
  tipoCita.value="";
  descripcion.value="";
  nomMedico.value="";
  tipoMedico.value="";
  hora.value="";
  fecha.value="";
  lugar.value="";
}


