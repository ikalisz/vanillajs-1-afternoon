//set up a board in my code
//assign a value to a variable that matches the player
//check if any matching combinations have the same value for the combination

let board = []

function resetBoard() {
    board.splice(0,9)
    for (let i = 0; i < 9; i++) {
        document.getElementById(i).innerText = ''
    }
}
function play(boxId) {
    let boardFull = true
    console.clear()
    let playerSpan = document.getElementById('player')
    let boxPlay = document.getElementById(boxId)
    if (board[boxId] === undefined) {
        if (playerSpan.innerText === 'X') {
            playerSpan.innerText = 'O'
            board[boxId] = 'X'
            boxPlay.innerText = playerSpan.innerText
        } else {
            playerSpan.innerText = 'X'
            board[boxId] = 'O'
            boxPlay.innerText = playerSpan.innerText
        }
    } else {
        window.alert(`You can't click on someone else's square!`)
    }
    for (let i = 0; i < 9; i++) {
        if (board[i] === undefined) {
            boardFull = false
    }
    }
    if (boardFull === true) {
        window.alert(`It's a cats game`)
        resetBoard()
    }
    if (board[0] !== undefined && board[0] === board[1] && board[0] === board[2]) {
        window.alert(`Winner is player ${board[0]}`)
    } else if (board[3] !== undefined && board[3] === board[4] && board[3] === board[5]) {
        window.alert(`Winner is player ${board[3]}`)
    } else if (board[6] !== undefined && board[6] === board[7] && board[6] === board[8]) {
        window.alert(`Winner is player ${board[6]}`)
    } else if (board[0] !== undefined && board[0] === board[3] && board[0] === board[6]) {
        window.alert(`Winner is player ${board[0]}` )
    } else if (board[1] !== undefined && board[1] === board[4] && board[1] === board[7]) {
        window.alert(`Winner is player ${board[1]}`)
    } else if (board[2] !== undefined && board[2] === board[5] && board[2] === board[8]) {
        window.alert(`Winner is player ${board[2]}`)
    } else if (board[0] !== undefined && board[0] === board[4] && board[0] === board[8]) {
        window.alert(`Winner is player${board[0]}`)
    } else if (board[6] !== undefined && board[6] === board[4] && board[6] === board[2]) {
        window.alert(`Winner is player ${board[6]}`)
    }
    
    console.log(board)
}
