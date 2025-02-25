
let amigos = [];

function agregarAmigo() {

    //Capturar el valor del campo entrada
    
    let input = document.getElementById('amigo'); //obtener el input
    let nombre = input.value.trim(); //el input sin espacios


    //Validar entrada

    //Verificar si el nombre esta vacio o no es valido
    if(!nombre) {
        alert('Por favor, ingrese un nombre');
        return;
    }

    //actualizar la lista de amigos
    amigos.push(nombre); //añadir el nombre al array amigos

    //limpiar campo de entrada
    input.value = '';

}