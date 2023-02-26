let seccionesCitas = document.getElementById("seccionesCitas");
let tablaCitas = document.getElementById("tablaCitas");

window.onload=init;
function init(){
    for(var i=0, len=localStorage.length; i<len; i++) {
        var key = localStorage.key(i).toString().split(" ");
        if(key[0]=="cita"){
            var value = JSON.parse(localStorage.getItem(localStorage.key(i)));

            var text="Tipo de cita: "+value['Tipo_cita']+" // "+
            "Nombre del medico: "+value['NomMedico']+" // "+
            "Lugar: "+value['Lugar'];

             tablaCitas.innerHTML += "<tr><td>"+localStorage.key(i).toString()+"</td><td>"+text+"</td><td>"+value['Hora']+"</td></tr>";  
            seccionesCitas.innerHTML += "<option>"+localStorage.key(i).toString()+"</option>";   
        }
    }
}