// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let inputAmigo = document.getElementById("amigo");
let listaAmigos = [];
let ulListaAmigos = document.getElementById("listaAmigos");
let ulResultado = document.getElementById("resultado");

function agregarAmigo() {
    let amigo = inputAmigo.value;
    if (!amigo) {
        alert("Debe ingresar un nombre");
    } else if (listaAmigos.includes(amigo)) {
        alert("Este nombre ya ha sido ingresado");
    } else {    
        listaAmigos.push(amigo);
        ulListaAmigos.innerHTML += `<li>${amigo}</li>`;
        limpiarCaja();
    }
}
function sortearAmigo() {
        let random = Math.floor(Math.random() * listaAmigos.length);
        let amigoSecreto = listaAmigos[random];
        ulResultado.innerHTML = `<li>El amigo secreto es : ${amigoSecreto}</li>`;
    }

function limpiarCaja() {
        document.querySelector("#amigo").value = "";
    }