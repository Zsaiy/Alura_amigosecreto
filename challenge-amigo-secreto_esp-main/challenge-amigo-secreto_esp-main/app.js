// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Capturar el input

let amigos=[];

function asignar_nombre(){
    let lista = document.getElementById('listaAmigos');
    amigos.forEach(item=>{
        let li = document.createElement('li');
        li.textContent = item;
        lista.append(li);
    })
}

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    console.log(nombre);
    if (nombre==''){
        alert("Por favor, inserte un nombre.")
    }
    else{
        amigos.push(nombre);
        asignar_nombre();
    }
}
