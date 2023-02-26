let citas = [];
let medicamentos=[];
let tablaCitas = document.getElementById("tablaCitas");
let tablaMedicamentos = document.getElementById("tablaMedicamentos");

var tipoCita,tipoCita,descripcion,nomMedico,tipoMedico,hora,fecha,lugar,btn_enviar;

function aggCita(obj){
  citas.push(obj);
}

function aggMedicamento(obj){
    medicamentos.push(obj);
}


window.onload=init;

function init(){

  btn_enviar=document.getElementById("btn_enviar");
  btn_enviar.addEventListener("click",enviar);

}

function enviar(){
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
  localStorage.setItem("cita"+(localStorage.length+1),JSON.stringify(citas));
  
}

/*
window.onload=function(){
  aggCita({
    cita: "Otorrino",
    hora: "7:30"
  });
  
  aggCita({
    cita: "Odontologo",
    hora: "4:00"
  });

  aggMedicamento({
    medicamento: "Acetaminofén",
    hora: "8:00"
  });

localStorage.setItem("citas",JSON.stringify(citas));
  
  for(i in citas){
    tablaCitas.innerHTML += "<tr><td>"+citas[i].cita+"</td><td>"+citas[i].hora+"</td></tr>"
  }

  for(i in medicamentos){
    tablaMedicamentos.innerHTML += "<tr><td>"+medicamentos[i].medicamento+"</td><td>"+medicamentos[i].hora+"</td></tr>"
  }
  


*/