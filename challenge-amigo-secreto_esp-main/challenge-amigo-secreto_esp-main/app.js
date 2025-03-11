// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Capturar el input

let amigos=[];

function limpiar_casilla(){
    let casilla = document.querySelector('#amigo');
    casilla.value='';
}
/* Funcion como lo pedia el trello.
function asignar_nombre() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; 

    amigos.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item;
        lista.appendChild(li);
    });
}
*/
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
    else if(amigos.includes(nombre)){//Es para evitar nombres repetidos.
        alert("El nombre ya se encuentra en la lista, por favor intente nuevamente.")
    }
    else{
        amigos.push(nombre);
        asignar_nombre(nombre);
        limpiar_casilla();
    }
}

function Sorteo(){
    let indice = Math.floor(Math.random()*(amigos.length));
    return indice
}

function sortearAmigo(){
    let lista = document.querySelectorAll('#listaAmigos li');
    if (lista.length == 0){
        alert("La lista de amigos se encuentra vacia.")
    }
    else{

        let resultado = document.getElementById('resultado');
        let indiceGanador=Sorteo();
        //resultado.textContent="El elegido es: "+lista[indiceGanador].textContent;
        resultado.innerHTML=("El elegido es: "+lista[indiceGanador].textContent);
    }
}


