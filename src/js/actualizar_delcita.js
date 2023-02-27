let seccionesCitas = document.getElementById("seccionesCitas");
let tablaCitas = document.getElementById("tablaCitas");
var btn_eliminar=document.getElementById("btn_eliminar");

window.onload=init;
function init(){
    for(var i=0, len=localStorage.length; i<len; i++) {
        var key = localStorage.key(i).toString().split(" ");
        if(key[0]=="cita"){
            var value = JSON.parse(localStorage.getItem(localStorage.key(i)));

            var text="Tipo de cita: "+value['Tipo_cita']+" // "+
            "Nombre del medico: "+value['NomMedico']+" // "+
            "Lugar: "+value['Lugar'];

            tablaCitas.innerHTML += "<tr id='"+localStorage.key(i).toString()+"'><td>"+key[1]+"</td><td>"+text+"</td><td>"+value['Hora']+"</td></tr>";//filas  
            seccionesCitas.innerHTML += "<option id='"+key[1]+"'>"+localStorage.key(i).toString()+"</option>";   //opciones
        }
    }
}
function eliminar(){
    var selected = seccionesCitas.options[seccionesCitas.selectedIndex];
    alert("se ha eliminado: "+selected.text);
    var tr=document.getElementById(selected.text);
    localStorage.removeItem(selected.text); 
    tablaCitas.innerHTML="";
    seccionesCitas.innerHTML="";
    tablaCitas.innerHTML += "<tr><th>id</th><th>cita</th><th>Hora</th></tr>";
    seccionesCitas.innerHTML += "<option selected>Seleccione una cita</option>";
    init();

}