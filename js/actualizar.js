let tablaMedicamentos = document.getElementById("tablaMedicamentos");
let tablaCitas = document.getElementById("tablaCitas");
var alerta="";
window.onload=init;
function init(){
    for(var i=0, len=localStorage.length; i<len; i++) {
        var key = localStorage.key(i).toString().split(" ");
        if(key[0]=="cita"){
            var value = JSON.parse(localStorage.getItem(localStorage.key(i)));
            
            alerta="Tipo de cita: "+value[0]['Tipo_cita']+"\n"+
                "Descripción: "+value[0]['Descripcion']+"\n"+
                "Nombre del medico: "+value[0]['NomMedico']+"\n"+
                "Tipo de medico: "+value[0]['Tipo_medico']+"\n"+
                "Fecha: "+value[0]['Fecha']+"\n"+
                "Lugar: "+value[0]['Lugar'];

            var text="Tipo de cita: "+value[0]['Tipo_cita']+" // "+
            "Nombre del medico: "+value[0]['NomMedico']+" // "+
            "Lugar: "+value[0]['Lugar'] + " /// <a onclick='alert(alerta)'>--ver más--</a>";

            tablaCitas.innerHTML += "<tr><td>"+text+"</td><td>"+value[0]['Hora']+"</td></tr>";
            
        }else{
            var value = JSON.parse(localStorage.getItem(localStorage.key(i)));
            alerta="Nombre_medico: "+value[0]['Nombre_medico']+"\n"+
                "Cantidad: "+value[0]['Cantidad']+"\n"+
                "Periodicidad: "+value[0]['Periodicidad']+"\n"+
                "Dias: "+value[0]['Dias']+"\n"+
                "Horas: "+value[0]['Horas']+"\n"+
                "Horamed: "+value[0]['Horamed']+"\n"+
                "Fecha: "+value[0]['Fecha'];

            
            
            var text="Nombre del medico: "+value[0]['Nombre_medico']+" // "+
            "Cantidad: "+value[0]['Cantidad']+" // "+
            "Periodicidad: "+value[0]['Periodicidad'] + " /// <a onclick='alert(alerta)'>--ver más--</a>";


  
            tablaMedicamentos.innerHTML += "<tr><td>"+text+"</td><td>"+value[0]['Periodicidad']+"</td></tr>";
        }
            
        //var value = localStorage[key];
        //console.log(value);
        //var valor_trozo = localStorage.key(i).split('nombre');
    }
}