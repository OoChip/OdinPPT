function creaButton (nombre){
    let button = document.createElement ("button")
    button.setAttribute("id", nombre)
    button.innerText = nombre
    let container = document.querySelector(".container");
    container.appendChild (button);
    return (button)
}

function cpuPlay (){
    let cpuSelect = Math.floor(Math.random() * (4 - 1)) + 1
    if (cpuSelect === 1 ){return "piedra"}
    else if (cpuSelect === 2 ){return "papel"}
    else if (cpuSelect === 3 ){return "tijera"}
}

function playUi (Event) {
    let cpu = cpuPlay()
    let player = Event.target.id
    if( cpu === player)
        p.innerText = `Empate. Cpu Jugo ${cpu} y Jugador ${player}. Puntuacion ${contador}.`
    else if ( (cpu === "papel" && player === "piedra") || (cpu === "piedra" && player === "tijera")|| (cpu === "tijera" && player === "papel")) {
        contador -= 1
        p.innerText = `Perdiste. Cpu Jugo ${cpu} y Jugador ${player}. Puntuacion ${contador}.`
        if (contador < -4)
            gameOver("Perdiste")
    }
    else {
        contador += 1
        p.innerText = `Ganaste. Cpu Jugo ${cpu} y Jugador ${player}. Puntuacion ${contador}.`
        if (contador > 4)
            gameOver ("Ganaste")    
    }
}

function gameOver (result){
    //escribir una funcion que deshabilite los botones.
    const buttons = document. querySelectorAll('button')
    buttons.forEach ( e => e.disabled = true)
    p.innerText = `Fin del Juego. ${result}.`
}


let container = document.querySelector(".container");
let p = document.createElement ("p")
p.innerText = "Selecciona"
container.appendChild(p)

let contador= 0
let piedra = creaButton("piedra")
let papel = creaButton("papel")
let tijera = creaButton("tijera")
piedra.addEventListener ("click",  playUi)
papel.addEventListener ("click",  playUi)
tijera.addEventListener ("click",  playUi)