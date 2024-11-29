var nombre = '';
var cedula ='';
var apellido='';


function comprobarTexto() {

    cedula = document.getElementById('idcedula').input.value;
    nombre = document.getElementById('idnombre').input.value;
    apellido = document.getElementById('idapellido').input.value;
    
    const objeto = JSON.parse(texto);

    if (cedula.length === 0) {
        document.getElementById('informativo').innerText = 'Ingrese una cedula';
    } else if (nombre.length === 0) {
        document.getElementById('informativo').innerText = 'Ingrese un nombre';
    } else if (apellido.length === 0) {
        document.getElementById('informativo').innerText = 'Ingrese un apellido';
    } else if (cedula.length === 0 && nombre.length === 0 && apellido.length === 0) {
        document.getElementById('informativo').innerText = 'Llene los campos';
    }else if (cedula.length >= 0 && nombre.length >= 0 && apellido.length >= 0){
        document.getElementById('jsoninput').innerText='{'+'Cedula:'+cedula+'Nombre:'+nombre+'Apellido'+apellido;
    }
}


