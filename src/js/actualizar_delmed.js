let seccionesMed = document.getElementById("seccionesMed");
let tablaMed = document.getElementById("contenedorMedicamentos");
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

            tablaMed.innerHTML += "<div>"+text+"</div><div>"+value['Periodicidad']+"</div><div></div>";
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
    tablaMed.innerHTML += "<div class=\"in4\" style=\"grid-area: 1 / 1 / 2 / 2;\"> <h3>ID</h3> </div><div class=\"in5\" style=\"grid-area: 1 / 2 / 2 / 3;\"><h3>Medicamento</h3>  </div><div class=\"in6\" style=\"grid-area: 1 / 3 / 2 / 4;\"><h3>Hora</h3> </div>";
    seccionesMed.innerHTML += "<option selected>Seleccione una cita</option>";
    init();

}