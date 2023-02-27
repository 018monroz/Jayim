let seccionesMed = document.getElementById("seccionesMed");
let tablaMed = document.getElementById("tablaMed");
var btn_eliminar=document.getElementById("btn_eliminar");

window.onload=init;
function init(){
    for(var i=0, len=localStorage.length; i<len; i++) {
        var key = localStorage.key(i).toString().split(" ");
        if(key[0]=="med"){
            var value = JSON.parse(localStorage.getItem(localStorage.key(i)));

            var text="Nombre del medico: "+value['Nombre_medico']+" // "+
                "Cantidad: "+value['Cantidad']+" // "+
                "Periodicidad: "+value['Periodicidad'];

            tablaMed.innerHTML += "<tr id='"+key[1]+"'><td>"+localStorage.key(i).toString()+"</td><td>"+text+"</td><td>"+value['Periodicidad']+"</td></tr>";
            seccionesMed.innerHTML += "<option id='"+key[1]+"'>"+localStorage.key(i).toString()+"</option>";   //opciones
        }
    }
}
function eliminar(){
    var selected = seccionesMed.options[seccionesMed.selectedIndex];
    alert("se ha eliminado: "+selected.text);
    var tr=document.getElementById(selected.text);
    localStorage.removeItem(selected.text); 
    tablaMed.innerHTML="";
    seccionesMed.innerHTML="";
    tablaMed.innerHTML += "<tr><th>id</th><th>cita</th><th>Hora</th></tr>";
    seccionesMed.innerHTML += "<option selected>Seleccione una cita</option>";
    init();

}