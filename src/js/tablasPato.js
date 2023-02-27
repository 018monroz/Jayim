var seccionesPatos,descripcion,btn_añadir,tablaPato;
var idPato=0;


window.onload=init;

function init(){
  btn_añadir=document.getElementById("btn_añadir");
  btn_añadir.addEventListener("click",enviarPat);
}

function enviarPat(){
    seccionesPatos=document.getElementById("seccionesPato");
    descripcion=document.getElementById("txtarea").value;
    tablaPato=document.getElementById("tablaPato");
    document.getElementById("txtarea").value="";

        
    var selected = seccionesPatos.options[seccionesPatos.selectedIndex];
    var obj={
        Patologia: selected.text,
        Descripcion: descripcion
    }
    
  try {
    idPato=JSON.parse(localStorage.getItem("idPato").toString());
    localStorage.setItem("idPato",(idPato+1));
  } catch (error) {
    idPato=0;
    localStorage.setItem("idPato",idPato+1);
  }
  localStorage.setItem("Pato "+(idPato+1),JSON.stringify(obj));

   
    var text="Patologia: "+obj['Patologia']+' // Descripcion: '+obj['Descripcion'];
    tablaPato.innerHTML += "<tr id='"+idPato+"'><td>"+(idPato+1)+"</td><td>"+text+"</td></tr>";
        
    
}
