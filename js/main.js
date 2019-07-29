/*---- Constants ----*/
const PLAYERS = {
  "null" : "white",
  "1" : "lime",
  "-1" : "purple",
}
const WINNING_COMBOS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

/*---- Define State Variables ----*/
let board, turn, winner;

/*---- Cached element references ----*/
const msgEl = document.getElementById('msg');
const sqEl = document.querySelectorAll('td div');

/*---- Event listeners ----*/
document.querySelector('table').addEventListener('click', handleClick);
document.querySelector('button').addEventListener('click', init);

/*---- Functions ----*/

init();

