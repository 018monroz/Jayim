

function inicializar(event){

    var cadena=event.target.id.toString();
    var array= cadena.split("_");
    var pagina=array[1]+".html";
    location.href=pagina;
    
}

