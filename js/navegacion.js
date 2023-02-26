
let secciones=["main.html","login.html","registro.html","Perfil.html","inicio.html","delmed.html","delcita.html","Configuracion.html","aggmed.html","aggcita.html"];
let btn_main,btn_login,btn_registro,btn_Perfil,btn_inicio,btn_delmed,btn_delcita,btn_config,btn_aggmed,btn_cita;


window.onload=init;
function init(){
    inicializarSecciones();
    inicializarVbles();
    crearEventos();
}
function inicializarSecciones(){
    secciones["btn_main"] = "main.html";
    secciones["btn_login"]="login.html";
    secciones["btn_registro"]="registro.html";
    secciones["btn_Perfil"]="Perfil.html";
    secciones["btn_inicio"]="inicio.html";
    secciones["btn_delmed"]="delmed.html";
    secciones["btn_delcita"]="delcita.html";
    secciones["btn_config"]="Configuracion.html";
    secciones["btn_aggmed"]="aggmed.html";
    secciones["btn_aggcita"]="aggcita.html";
}
function inicializarVbles(){
    btn_login= document.getElementById("btn_login");
    btn_home= document.getElementById("btn_home");
    btn_registro= document.getElementById("btn_registro");
}
function crearEventos(){
    btn_home.addEventListener("click",enrutador);
    btn_login.addEventListener("click",enrutador);
    btn_registro.addEventListener("click",enrutador);
}
function enrutador(evento){//a que se le dio click
    //target, saber a que le dio click a un boton
    location.href = secciones[evento.target.id];
}