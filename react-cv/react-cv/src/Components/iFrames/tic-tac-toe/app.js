const spaces = document.querySelectorAll('.space')
const turn = document.getElementById('turn')
const winner = document.getElementById('winner')

//checking for a win
function checkWin(turn) {
    //checking vertical win
    for (let i=0; i<3; i++) {
        console.log(i)
        if (spaces[i].textContent === turn && spaces[i+3].textContent === turn && spaces[i+6].textContent === turn){
            spaces.forEach(space => space.textContent = turn)
            winner.textContent = `PLAYER ${turn} WINS!!!`
        }
    }
    //checking horizontal win
    for (let i=0; i<8; i=i+3) {
        console.log(i)
        if (spaces[i].textContent === turn && spaces[i+1].textContent === turn && spaces[i+2].textContent === turn){
            spaces.forEach(space => space.textContent = turn)
            winner.textContent = `PLAYER ${turn} WINS!!!`
        }
    }
    //checking diagonal win
    if (spaces[0].textContent === turn && spaces[4].textContent === turn && spaces[8].textContent === turn){
        spaces.forEach(space => space.textContent = turn)
        winner.textContent = `PLAYER ${turn} WINS!!!`
    }
    
    if (spaces[2].textContent === turn && spaces[4].textContent === turn && spaces[6].textContent === turn){
        spaces.forEach(space => space.textContent = turn)
        winner.textContent = `PLAYER ${turn} WINS!!!`
    }

}
//setting a square as either X or O
function move(space) {
    if (turn.textContent === "X") {
        space.textContent = "X"
        checkWin("X")
        turn.textContent = "O"

    } else if (turn.textContent === "O") {
        space.textContent = "O"
        checkWin("O")
        turn.textContent = "X"
    }
    console.log(spaces[0].textContent)
}

spaces.forEach(space => space.addEventListener('click', () => move(space)))