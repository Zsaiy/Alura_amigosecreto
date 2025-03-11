// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Capturar el input

let amigos=[];

function limpiar_casilla(){
    let casilla = document.querySelector('#amigo');
    casilla.value='';
}

function asignar_nombre(nombre){
    let lista = document.getElementById('listaAmigos');
    let li = document.createElement('li');
    li.textContent = nombre;
    lista.append(li);
}

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    console.log(nombre);
    if (nombre==''){
        alert("Por favor, inserte un nombre.")
    }
    else if(amigos.includes(nombre)){
        alert("El nombre ya se encuentra en la lista, por favor intente nuevamente.")
    }
    else{
        amigos.push(nombre);
        asignar_nombre(nombre);
        limpiar_casilla();
    }
}


