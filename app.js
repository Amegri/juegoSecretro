
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];

condicionesIniciales();

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`adivinaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','el numero secreto es menor');
        } else {
            asignarTextoElemento('p','el numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*10)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }

 
}

function limpiarCaja(){
document.querySelector('#valorUsuario').value = "";
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p','Indica el numero del 1 al 10');
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
    
}





/* Ejercicio de practica, recibir 3 numeros y sacar el promedio
function calcularPromedio(){
        let contador = 1;
        let lecturaNumero = parseInt((document.getElementById('valorUsuario')).value); 
        let primerNumero;
        let segundoNumero;
        let tercerNumero;
        contador++;


        console.log(contador);
        console.log(primerNumero);
        console.log(segundoNumero);
        console.log(tercerNumero);

}
*/