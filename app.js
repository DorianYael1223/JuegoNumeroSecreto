let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteado = [];
let numeroMaximo = 10; 

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        // el usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteado);
    // si ya sorteamos todos los numeros
    if (listaNumerosSorteado.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles')       
    } else {
    // si el numero generado esta incluido en la lista
        if (listaNumerosSorteado.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
           listaNumerosSorteado.push(numeroGenerado);
         return numeroGenerado;
        }
    }
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function condicionesInciales() {
    asignarTextoElemento('h1' , 'Juego del numero Secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    // limpiar caja
    limpiarCaja();
    // indicar mensaje de intervalo de números
    // generar el numero aleatorio
    // inicializar el numero de intentos
    condicionesInciales();
    // deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesInciales();