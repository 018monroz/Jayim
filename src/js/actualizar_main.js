let tablaMedicamentos1 = document.getElementById("contenedorMedicamentos");
let tablaCitas = document.getElementById("contenedorcitas");
window.onload=init;
function init(){
    for(var i=0, len=localStorage.length; i<len; i++) {
        var key = localStorage.key(i).toString().split(" ");
        if(key[0]=="cita"){
            var value = JSON.parse(localStorage.getItem(localStorage.key(i)));

            var text="Tipo de cita: "+value['Tipo_cita']+" // "+
            "Nombre del medico: "+value['NomMedico']+" // "+
            "Lugar: "+value['Lugar'];
        
            tablaCitas.innerHTML += "<div class='info'>"+key[1]+"</div><div class='info'>"+text+"</div><div class='info'>"+value['Hora']+"</div>";   
        }else if(key[0]=="med"){
            var value = JSON.parse(localStorage.getItem(localStorage.key(i)));
            alerta="Nombre_medico: "+value['Nombre_medico']+"\n"+
                "Cantidad: "+value['Cantidad']+"\n"+
                "Periodicidad: "+value['Periodicidad']+"\n"+
                "Dias: "+value['Dias']+"\n"+
                "Horas: "+value['Horas']+"\n"+
                "Horamed: "+value['Horamed']+"\n"+
                "Fecha: "+value['Fecha'];

            var text="Nombre del medico: "+value['Nombre_medico']+" // "+
                "Cantidad: "+value['Cantidad']+" // "+
                "Periodicidad: "+value['Periodicidad'];

            tablaMedicamentos1.innerHTML += "<div class='info'>"+key[1]+"</div><div class='info'>"+text+"</div><div class='info'>"+value['Periodicidad']+"</div>";
        }
    }
}