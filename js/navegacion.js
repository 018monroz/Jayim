
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
    btn_main=document.getElementById("btn_main");
    btn_login=document.getElementById("btn_login");
    btn_registro=document.getElementById("btn_registro");
    btn_Perfil=document.getElementById("btn_Perfil");
    btn_inicio=document.getElementById("btn_inicio");
    btn_delmed=document.getElementById("btn_delmed");
    btn_delcita=document.getElementById("btn_delcita");
    bbtn_config=document.getElementById("bbtn_config");
    btn_aggmed=document.getElementById("btn_aggmed");
    btn_cita=document.getElementById("btn_cita");
}
function crearEventos(){
    btn_main.addEventListener("click",enrutador);
    btn_login.addEventListener("click",enrutador);
    btn_registro.addEventListener("click",enrutador);
    btn_Perfil.addEventListener("click",enrutador);
    btn_inicio.addEventListener("click",enrutador);
    btn_delmed.addEventListener("click",enrutador);
    btn_delcita.addEventListener("click",enrutador);
    bbtn_config.addEventListener("click",enrutador);
    btn_aggmed.addEventListener("click",enrutador);
    btn_cita.addEventListener("click",enrutador);
}
function enrutador(evento){
    location.href = secciones[evento.target.id];
}