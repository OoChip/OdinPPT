function creaButton (nombre){
    let button = document.createElement ("button")
    button.setAttribute("id", nombre)
    // let img= document.createElement ("img")
    // img.setAttribute("src", `./img/${nombre}.svg`)
    button.textContent = nombre
    console.log(button);
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
    start.hidden = false
    start.disabled = false
    p.innerText = `Fin del Juego. ${result}.`
    
}

function restart () {
    contador = 0
    const buttons = document. querySelectorAll('button')
    buttons.forEach ( Element => Element.disabled = false)
    p.innerText = `Juego Nuevo.`
    start.hidden = true
 }

let container = document.querySelector(".container");
let p = document.createElement ("p")
p.innerText = "Selecciona"
container.appendChild(p)

let contador= 4
let piedra = creaButton("piedra")
let papel = creaButton("papel")
let tijera = creaButton("tijera")
let start= creaButton("start")
start.hidden= true
piedra.addEventListener ("click",  playUi)
papel.addEventListener ("click",  playUi)
tijera.addEventListener ("click",  playUi)
start.addEventListener("click", restart)