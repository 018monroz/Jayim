let medicamentos=[];

var nomMed,cantidad,periodicidad,dias,horas,horamed,fecha,btn_enviar;


function aggMedicamento(obj){
    medicamentos.push(obj);
}


window.onload=init;

function init(){
  btn_enviar=document.getElementById("btn_enviar");
  btn_enviar.addEventListener("click",enviarMed);
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