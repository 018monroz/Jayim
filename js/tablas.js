let citas = [];
let medicamentos=[];
let tablaCitas = document.getElementById("tablaCitas");
let tablaMedicamentos = document.getElementById("tablaMedicamentos");

var tipoCita,tipoCita,descripcion,nomMedico,tipoMedico,hora,fecha,lugar,btn_enviar;
var nomMed,cantidad,periodicidad,dias,horas,horamed,fecha,btn_enviarmed;
function aggCita(obj){
  citas.push(obj);
}

function aggMedicamento(obj){
    medicamentos.push(obj);
}


window.onload=init;

function init(){
  btn_enviarmed=document,getElementById("btn_enviarmed");
  btn_enviarmed.addEventListener("click",enviarMed);
  console.log(btn_enviarmed.id);
  btn_enviar=document.getElementById("btn_enviar");
  btn_enviar.addEventListener("click",enviarCita);
  console.log(btn_enviar.id);
}

function enviarMed(){
  nomMed=document.getElementById("nomMed").value;
  cantidad=document.getElementById("cantidad").value;
  periodicidad=document.getElementById("periodicidad").value;
  dias=document.getElementById("dias").value;
  horas=document.getElementById("horas").value;
  horamed=document.getElementById("horamed").value;
  fecha=document.getElementById("fecha").value;

  console.log(nomMed);
  console.log(cantidad);
  console.log(periodicidad);
  console.log(dias);
  console.log(horas);
  console.log(horamed);
  console.log(fecha);


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
  aggMedicamento(obj);
  localStorage.setItem("Medicamento "+(localStorage.length+1),JSON.stringify(medicamentos));


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