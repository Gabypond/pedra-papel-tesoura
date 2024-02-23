let $winnerGamePrint = document.querySelector('.winning-score')

const $buttonStonePlayer1 = document.querySelector('.stone-player1')
const $buttonPaperPlayer1 = document.querySelector('.paper-player1')
const $buttonScissorsPlayer1 = document.querySelector('.scissors-player1')
const $buttonStonePlayer2 = document.querySelector('.stone-player2')
const $buttonPaperPlayer2 = document.querySelector('.paper-player2')
const $buttonScissorsPlayer2 = document.querySelector('.scissors-player2')

let $pointingPlayer1 = document.querySelector('#point-player1')
let $pointingPlayer2 = document.querySelector('#point-player2')

const $moveBoxPlayer1 = document.querySelector('.battlefild-player1')
const $moveBoxPlayer2 = document.querySelector('.battlefild-player2')


let movingPlayer1 = ''
let movingPlayer2 = ''
let winner = 0
let playerScore1 = 0
let playerScore2 = 0

let $resetButton = document.querySelector('.reset')

function setWinner() {
    if (movingPlayer1 == '' || movingPlayer2 == '') {
        return
    }
    if (movingPlayer1 == movingPlayer2) {
        winner = 3
    } else if (movingPlayer1 == 'stone' && movingPlayer2 == 'paper') {
        winner = 2
    } else if (movingPlayer1 == 'stone' && movingPlayer2 == 'scissors') {
        winner = 1
    } else if (movingPlayer1 == 'paper' && movingPlayer2 == 'stone') {
        winner = 1
    } else if (movingPlayer1 == 'paper' && movingPlayer2 == 'scissors') {
        winner = 2
    } else if (movingPlayer1 == 'scissors' && movingPlayer2 == 'stone') {
        winner = 2
    } else if (movingPlayer1 == 'scissors' && movingPlayer2 == 'paper') {
        winner = 1
    }
}

function addWinnerPlayer() {
    if (winner == 1) {
        playerScore1 = playerScore1 + 1

    } else if (winner == 2) {
        playerScore2 = playerScore2 + 1
    }
}

function winnerPrint() {
    if (winner == 1) {
        $winnerGamePrint.innerHTML = 'Jogador ' + winner + ' Ganhou'

    } else if (winner == 2) {
        $winnerGamePrint.innerHTML = 'Jogador ' + winner + ' Ganhou'
    } else if (winner == 3) {
        $winnerGamePrint.innerHTML = 'Empate'
    }

}

function resetScorePlayer() {
    $moveBoxPlayer1.innerHTML = ''
    $moveBoxPlayer2.innerHTML = ''
}

function resetBattlefild() {
    movingPlayer1 = ''
    movingPlayer2 = ''

}

function resetPrintWinnerPlayer() {
    playerScore1 = ''
    playerScore2 = ''
    $winnerGamePrint.innerHTML = 'Deu certo'

}

function resetAll() {
    resetBattlefild()
    resetPrintWinnerPlayer()
    resetScorePlayer()
}

function printWinnerPlayer() {
    $pointingPlayer1.innerHTML = playerScore1.toString().padStart(2, '0')
    $pointingPlayer2.innerHTML = playerScore2.toString().padStart(2, '0')

}

function handleStoneMovePlayer1() {
    $moveBoxPlayer1.innerHTML = '<img src="/images/stone.png">'
    movingPlayer1 = 'stone'
    setWinner()
    addWinnerPlayer()
    printWinnerPlayer()
    winnerPrint()
    if (winner != 0) {
        setTimeout(resetBattlefild, 1000)
        resetPrintWinnerPlayer()
        winner = 0
        console.log(resetBattlefild, resetScorePlayer)
    }
}

function handlePaperMovePlayer1() {
    $moveBoxPlayer1.innerHTML = '<img src="/images/paper.png">'
    movingPlayer1 = 'paper';
    setWinner()
    addWinnerPlayer()
    printWinnerPlayer()
    winnerPrint()
    if (winner != 0) {
        setTimeout(resetScorePlayer, 1000)
        resetPrintWinnerPlayer()
        winner = 0
    }
}

function handleScissorsMovePlayer1() {
    $moveBoxPlayer1.innerHTML = '<img src="/images/scissors.png">'
    movingPlayer1 = 'scissors';
    setWinner()
    addWinnerPlayer()
    printWinnerPlayer()
    winnerPrint()
    if (winner != 0) {
        setTimeout(resetScorePlayer, 1000)
        resetPrintWinnerPlayer()
        winner = 0
        console.log(resetBattlefild, resetScorePlayer)
    }
}

function handleStoneMovePlayer2() {
    $moveBoxPlayer2.innerHTML = '<img src="/images/stone.png">'
    movingPlayer2 = 'stone';
    setWinner()
    addWinnerPlayer()
    printWinnerPlayer()
    winnerPrint()
    if (winner != 0) {
        setTimeout(resetScorePlayer, 1000)
        resetPrintWinnerPlayer()
        winner = 0
        console.log(resetBattlefild, resetScorePlayer)
    }
}

function handlePaperMovePlayer2() {
    $moveBoxPlayer2.innerHTML = '<img src="/images/paper.png">'
    movingPlayer2 = 'paper';
    setWinner()
    addWinnerPlayer()
    printWinnerPlayer()
    winnerPrint()
    if (winner != 0) {
        setTimeout(resetScorePlayer, 1000)
        resetPrintWinnerPlayer()

        winner = 0
        console.log(resetBattlefild, resetScorePlayer)
    }
}

function handleScissorsMovePlayer2() {
    $moveBoxPlayer2.innerHTML = '<img src="/images/scissors.png">'
    movingPlayer2 = 'scissors';
    setWinner()
    addWinnerPlayer()
    printWinnerPlayer()
    winnerPrint()
    resetPrintWinnerPlayer()
    if (winner != 0) {
        setTimeout(resetScorePlayer, 1000)
        resetPrintWinnerPlayer()
        winner = 0
        console.log(resetBattlefild, resetScorePlayer)
    }
}



$buttonStonePlayer1.addEventListener('click', handleStoneMovePlayer1)
$buttonPaperPlayer1.addEventListener('click', handlePaperMovePlayer1)
$buttonScissorsPlayer1.addEventListener('click', handleScissorsMovePlayer1)

$buttonStonePlayer2.addEventListener('click', handleStoneMovePlayer2)
$buttonPaperPlayer2.addEventListener('click', handlePaperMovePlayer2)
$buttonScissorsPlayer2.addEventListener('click', handleScissorsMovePlayer2)

$resetButton.addEventListener('click', resetAll)