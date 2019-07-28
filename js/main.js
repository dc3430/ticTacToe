var origBoard;
const huPlayer = 'O';
const aiPlayer = 'X';
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

const cell = document.querySelectorAll('.cell'); //selecting the cell
startGame();

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

function turnClick(Square) {
    // console.log(square.targe.id);
    turn(square.target.id, huPlayer)
}

function turn(squareId, Player) {
    origBoard[squareId] = player;
    document.getElementById(squareId).innerText = player;
}

