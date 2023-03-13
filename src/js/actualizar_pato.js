var seccionesPatos=document.getElementById("seccionesPato");
var descripcion=document.getElementById("txtarea");
var tablaPato=document.getElementById("contenedorPato");
var idPato=0;

window.onload=init;
function init(){
    for(var i=0, len=localStorage.length; i<len; i++) {
        var key = localStorage.key(i).toString().split(" ");
        if(key[0]=="Pato"){
            var value = JSON.parse(localStorage.getItem(localStorage.key(i)));
            tablaPato.innerHTML += "<div>"+key[1]+"</div><div>"+value['Patologia']+"</div><div>"+value['Descripcion']+"</div>";;
        }
    }
}

