console.log ("*************Juego*************")

let Piedra = 1
    , Papel = 2
    , Tijera = 3
    , playerSelection
    , computerSelection
    , computerString
    , playerString
    , result
    , error = false



function computerPlay (){
    computerSelection = Math.floor(Math.random() * (4 - 1)) + 1
    if (computerSelection === 1 )
        computerString = "Piedra"
    else if (computerSelection === 2 )
        computerString = "Papel"
    else if (computerSelection === 3 )
        computerString = "Tijera"
}

function playerPlay (){
    playerSelection = parseInt(prompt("ingrese 1 para Piedra, 2 para Papel y 3 para Tijeras"))
    if (playerSelection === 1 )
        playerString = "Piedra"
    else if (playerSelection === 2 )
        playerString = "Papel"
    else if (playerSelection === 3 )
        playerString = "Tijera"
    else
        error = true
}

function play (p, c){
    if( p === c )
        result = "Empate"
    else if ( (p === Piedra && c === Papel) || (p === Papel && c === Tijera) || (p === Tijera && c === Piedra) )
        result = "Perdiste"
    else
        result = "Ganaste"
}

computerPlay()
console.log(`Computadora eligio ${computerSelection} = ${computerString}`)

playerPlay()
console.log(`Jugador eligo ${playerSelection} = ${playerString}`)

play(playerSelection, computerSelection)
if (error)
    console.log( "Debes introducir un numero entre 1 y 3")
else 
    console.log(result )