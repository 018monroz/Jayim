let citas = [];
let medicamentos=[];
let tablaCitas = document.getElementById("tablaCitas");
let tablaMedicamentos = document.getElementById("tablaMedicamentos");

function aggCita(obj){
  citas.push(obj);
}

function aggMedicamento(obj){
    medicamentos.push(obj);
  }

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
  


}