var seccionesPatos=document.getElementById("seccionesPato");
var descripcion=document.getElementById("txtarea");
var tablaPato=document.getElementById("tablaPato");
var idPato=0;

window.onload=init;
function init(){
    for(var i=0, len=localStorage.length; i<len; i++) {
        var key = localStorage.key(i).toString().split(" ");
        if(key[0]=="Pato"){
            var value = JSON.parse(localStorage.getItem(localStorage.key(i)));
            var text="Patologia: "+value['Patologia']+" // Descripcion: "+value['Descripcion'];
            tablaPato.innerHTML += "<tr id='"+key[1]+"'><td>"+key[1]+"</td><td>"+text+"</td></tr>";
        }
    }
}

