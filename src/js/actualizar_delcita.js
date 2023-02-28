let seccionesCitas = document.getElementById("seccionesCitas");
let tablaCitas1 = document.getElementById("contenedorcitas");
var btn_eliminar1=document.getElementById("btn_eliminar");

window.onload=init;
function init(){
    for(var i=0, len=localStorage.length; i<len; i++) {
        var key = localStorage.key(i).toString().split(" ");
        if(key[0]=="cita"){
            var value = JSON.parse(localStorage.getItem(localStorage.key(i)));

            var text="Tipo de cita: "+value['Tipo_cita']+" // "+
            "Nombre del medico: "+value['NomMedico']+" // "+
            "Lugar: "+value['Lugar'];

            tablaCitas1.innerHTML += "<div>"+key[1]+"</div><div>"+text+"</div><div>"+value['Hora']+"</div>";//filas  
            seccionesCitas.innerHTML += "<option id='"+key[1]+"'>"+localStorage.key(i).toString()+"</option>";   //opciones
        }
    }
}
function eliminar(){
    var selected = seccionesCitas.options[seccionesCitas.selectedIndex];
    alert("se ha eliminado: "+selected.text);
    var tr=document.getElementById(selected.text);
    localStorage.removeItem(selected.text); 
    tablaCitas1.innerHTML="";
    seccionesCitas.innerHTML="";
    tablaCitas1.innerHTML += "<div class=\"in4\" style=\"grid-area: 1 / 1 / 2 / 2;\"> <h3>ID</h3> </div><div class=\"in5\" style=\"grid-area: 1 / 2 / 2 / 3;\"><h3>Cita</h3>  </div><div class=\"in6\" style=\"grid-area: 1 / 3 / 2 / 4;\"><h3>Hora</h3> </div>";
    seccionesCitas.innerHTML += "<option selected>Seleccione una cita</option>";
    init();

}