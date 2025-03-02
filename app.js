
let amigos = [];

//Funcion para agregar amigos
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

    //Actualizar la lista de amigos
    amigos.push(nombre); //añadir el nombre al array amigos

    //Limpiar campo de entrada
    input.value = '';

    //Actualizar la lista de amigos en la interfaz
    actualizarListaAmigos();

}


//Funcion para actualizar la lista de amigos
function actualizarListaAmigos() {

    //Obtener el elemento de la lista
    let lista = document.getElementById('listaAmigos'); //obtener la lista

    //Limpiar la lista existente
    lista.innerHTML = ''; //limpiar la lista actual

    //Iterar sobre el arreglo
    for(let i = 0; i < amigos.length; i++) { 

        //Agregar elementos a la lista
        let li = document.createElement('li'); //crear un elemento li
        li.textContent = amigos[i]; //añadir el nombre del amigo al li
        lista.appendChild(li); //añadir el li a la lista de amigos

    }
}

// Funcion para sortear los amigos
function sortearAmigo() {

    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert('No hay amigos para sortear');
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length); //generar un numero aleatorio entre 0 y la cantidad de amigos que hay en el array

    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio]; //obtener el amigo sorteado

    // Mostrar el resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `¡El amigo secreto sorteado es: ${amigoSorteado}!`; //mostrar el amigo sorteado en el ul de id resultado



    //Vaciar el array de amigos despues del sorteo
    amigos = []; //limpiar el array de amigos

    //Actualizar la lista de amigos en la interfaz
    actualizarListaAmigos();
}