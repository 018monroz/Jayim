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
    tablaPato=document.getElementById("contenedorPato");
    document.getElementById("txtarea").value="";

        
    var selected = seccionesPatos.options[seccionesPatos.selectedIndex];
    var obj={
        Patologia: selected.text,
        Descripcion: descripcion
    }
    if(selected.text=="Seleccione un medicamento" || descripcion==""){
      alert("Campos vacíos");
    }else{
      if(JSON.parse(localStorage.getItem("idPato"))==null){
        idPato=0;
        localStorage.setItem("idPato",idPato+1);
      }else{
        idPato=JSON.parse(localStorage.getItem("idPato").toString());
        localStorage.setItem("idPato",(idPato+1));
      }
      localStorage.setItem("Pato "+(idPato+1),JSON.stringify(obj));
  
      tablaPato.innerHTML+= "<div>"+(idPato+1)+"</div><div>"+obj['Patologia']+"</div><div>"+obj['Descripcion']+"</div>";;
          
    }
    
    
}
