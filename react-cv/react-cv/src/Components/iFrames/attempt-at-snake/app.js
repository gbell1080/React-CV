const grid = document.querySelector('.grid')
squares = Array.from(document.querySelectorAll('.grid div'))
docScore = document.getElementById("score")
lastKey = 'left'

let currentPosition = 0
let snakehead = 0

squares[(Math.floor(Math.random() * 100))].classList.add('apple')
score = 0
snakeSquares = [currentPosition]
newAppleId = 0

//want to get rid of adding a class to every snake piece and just doing for the head of the snake, but this works for now
function drawSnake(snakeSquares) {
    for (let i = 0; i < snakeSquares.length; i++) {
        squares[snakeSquares[i]].classList.add('snake')
    }
}

// used to use this function when I drew and then removed the snake within each frame
// function undrawSnake(position){
//     squares[position].classList.remove('snake')
// }

function start() {
    //resetting the game

    squares.forEach(square => { square.classList.remove('snake') })
    squares.forEach(square => { square.classList.remove('dead') })
    currentPosition = (Math.floor(Math.random() * 100));
    snakeSquares = [currentPosition]
    snakehead = squares[currentPosition]
    snakehead.classList.add('snake')
    score = 0
    docScore.textContent = score;


    timerId = setInterval(gameLoop, 500)
    document.addEventListener('keydown', control)
    console.log('its working')
}


function moveUp() {
    if (currentPosition >= 10) {
        newPosition = currentPosition - 10
        snakehead = squares[newPosition]
        currentPosition = newPosition
    } else {
        snakeSquares.forEach(square => { squares[square].classList.add('dead') })
        clearInterval(timerId)
        docScore.textContent = "Game Over!!!"
    }
    snakeSquares.push(currentPosition)
}

function moveDown() {
    if (currentPosition <= 89) {
        if (newPosition in snakeSquares) {
            gameOver()
            return
        }
        newPosition = currentPosition + 10
        snakehead = squares[newPosition]
        currentPosition = newPosition
    } else {
        gameOver()
        return
    }
    snakeSquares.push(currentPosition)
}

function moveLeft() {
    if (currentPosition % 10 !== 0) {
        newPosition = currentPosition - 1
        snakehead = squares[newPosition]
        if (squares[newPosition].classList.contains('snake')) {
            gameOver()
            return
        }
        currentPosition = newPosition
    } else {
        gameOver()
    }
    snakeSquares.push(currentPosition)
}

function moveRight() {
    if (currentPosition % 10 !== 9) {
        newPosition = currentPosition + 1
        snakehead = squares[newPosition]
        currentPosition = newPosition
    } else {
        snakeSquares.forEach(square => { squares[square].classList.add('dead') })
        clearInterval(timerId)
        docScore.textContent = "Game Over!!!"
    }
    snakeSquares.push(currentPosition)
}


function control(e) {
    if (e.keyCode === 37) {
        lastKey = 'left'
        // moveLeft()
    }
    if (e.keyCode === 38) {
        lastKey = 'up'
        // moveUp()
    }
    if (e.keyCode === 39) {
        lastKey = 'right'
        // moveRight()
    }
    if (e.keyCode === 40) {
        lastKey = 'down'
        // moveDown()
    }
}

function checkApple() {
    if (snakehead.classList.contains('apple')) {
        snakehead.classList.remove('apple')
        score += 10
        docScore.textContent = score;
        // squares[(Math.floor(Math.random()*100))].classList.add('apple')
        newApple()
        console.log(score)
        snakeSquares.unshift(snakeSquares[0])
    }
}
function newApple() {
    let newAppleId = Math.floor(Math.random() * 100)
    if (snakeSquares.includes(newAppleId)) {
        newApple()
        console.log('apple cant be placed here')
    } else {
        squares[newAppleId].classList.add('apple')
    }
}

function gameLoop() {
    switch (lastKey) {
        case 'left':
            moveLeft()
            break;
        case 'right':
            moveRight()
            break;
        case 'up':
            moveUp()
            break;
        case 'down':
            moveDown()
            break;
    }
    squares[snakeSquares.shift()].classList.remove('snake')
    checkApple()
    // undrawSnake(snakeSquares.shift())
    console.log(snakeSquares)
    drawSnake(snakeSquares)
}

function gameOver() {
    snakeSquares.forEach(square => { squares[square].classList.add('dead') })
    clearInterval(timerId)
    docScore.textContent = "Game Over!!!"
}