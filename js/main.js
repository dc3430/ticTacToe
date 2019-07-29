/*---- Constants ----*/
var origBoard;
const fstPlayer = 'O';
const sdPlayer = 'X';
const winCombo = [ //tells you the location you can get a win in 
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
]

/*---- Event listeners ----*/

const cell = document.querySelectorAll('.cell'); //selecting the cell
startGame();

/*---- Functions ----*/
function startGame() {
    document.querySelector(".endGame").style.display = "none"
    origBoard = Array.from(Array(9).keys());
    // console.log(origBoard);
    for (var i = 0; i < cell.length; i++) {
        cell[i],innerText = '';
        cell[i].style.removeProperty('background-color');
        cell[i].addEventListener('click', turnClick, false);
    }
}

function turnClick(square) { //I need to look at this some more, the other player not getting a turn
	if (typeof origBoard[square.target.id] == 'number') {
		turn(square.target.id, fstPlayer)
		if (!checkTie()) turn(bestSpot(), sdPlayer);
	}
}

function turn(squareId, player) { 
    origBoard[squareId] = player; // to look back at origin board for player
    document.getElementById(squareId).innerText = player;
    let gameWon = checkWin(origBoard, player)
    if (gameWOn) gameOver(gameWon)
}

function checkWin(board, player) { // using the reduce method, the array will be empty
    let plays = board.reduce((a, e, i) => //to find all the place on the board that have been played, add index to array
        (e === player) ? a.concat(i) : a, []) //turn ter.array
    let gameWin = null;
    for (let [index, win] of winCombos.entries()) { // looking at the winComb we created
        if (win.every(elm => player.indexOf(elem) > -1)) { //see if the ind is greater than -1
            gameWon = {index: index, player: player};
            break;
        }
    }
    return gameWon;
}

function gameOver(gameWon) {
    for (let index of winCombo[gameWon.index]) {
        document.getElementById(index).style.backgroundColor = 
            gameWon.player == humplayer ? "blue" : "red"
    }
    for (var i = 0; i < cell.length; i++) {
        cells[i].removeEventListener('click', turnClick, false);
    }
    declarewinner(gameWon.player == fstPlayer ? "You win!" : "You lose.");
}


function declarewinner(who) {
    document.querySelector("endGame").style.display = "block";
    document.querySelector("endGame.text").innerText = who;
}

function emptySquare() {
    return origBoard.filter(s => typeof s == 'number');
}

function bestSpot() {
    return emptySqaure()[0];
}


//for got to add a render, that might be be why I can't which users? 


