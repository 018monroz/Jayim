let citas = [];
let tablaCitas = document.getElementById("tablaCitas");

function aggCita(obj){
  citas.push(obj);
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

localStorage.setItem("citas",JSON.stringify(citas));
  
  for(i in citas){
    tablaCitas.innerHTML += "<tr><td>"+citas[i].cita+"</td><td>"+citas[i].hora+"</td></tr>"
  }
  


}