// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let nombreAmigo = '';
let li = '';
let lista = '';
resultadoSorteo = '';

function agregarAmigo(){
    agregar();
    
    if (nombreAmigo == ''){
        alert('Por favor, inserte un nombre');
    } else{
        amigos.push(nombreAmigo); //se agrega el nombre ingresado a la lista amigos
        limpiarCaja();
        li = document.createElement('li'); //se crea un elemento de la lista y se asigna a la variable li
        lista = document.querySelector('#listaAmigos').appendChild(li); //se agrega el elemento li dentro del lugar listaAmigos
        lista.innerHTML = amigos[amigos.length - 1];//se le asigna el ultimo amigo agregado a lista              
    }
    return;
}

function limpiarCaja(){
    let valorCaja = document.getElementById('amigo');
    valorCaja.value = '';
    return;
}

function seleccionAmigoSecreto(){
    if (amigos.length == 0){
        alert('No hay amigos para sortear');
    } else{
        let numero = Math.floor(Math.random()*amigos.length);
        console.log(numero);
        amigoSeleccionado = amigos[numero];
        console.log(amigoSeleccionado);
        return amigoSeleccionado;
        }
}

function sortearAmigo(){
    if (amigos.length == 0){
        alert('No hay amigos para sortear');
    } else{
        resultadoSorteo = document.getElementById('resultado');
        resultadoSorteo.innerHTML = `El amigo secreto sorteado es: ${seleccionAmigoSecreto()}`;

    }
}

function reiniciar(){
    location.reload();
    return;
}

function agregar(){
    nombreAmigo = document.getElementById('amigo').value;
    return nombreAmigo;
}

let input = document.getElementById("amigo");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("myBtn").click();
  }
});