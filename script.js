'use strict';

// const gameBoard = (() => {
//   const boardArray = ['', '', '', '', '', '', '', '', ''];
//   const squares = document.querySelectorAll('.square');
//   for (let i = 0; i < boardArray.length; i++) {
//     squares[i].textContent = boardArray[i];
//   }
//   return { boardArray, squares };
// })();

let turn = 'X';

const boardArray = ['', '', '', '', '', '', '', '', ''];
const squares = document.querySelectorAll('.square');
function displayBoard() {
  for (let i = 0; i < boardArray.length; i++) {
    squares[i].textContent = boardArray[i];
  }
}

squares.forEach((square) => {
  square.addEventListener('click', (e) => {
    if (boardArray[`${e.target.id}`]) return;
    boardArray[`${e.target.id}`] = `${turn}`;
    displayBoard();
    console.log(e.target.id);
    console.log(boardArray);
    switchTurn();
    updateTurnDisplay();
    checkWinner();
  });
});

function switchTurn() {
  if (turn === 'X') {
    turn = 'O';
  } else turn = 'X';
}

const turnDisplay = document.querySelector('.turn');
function updateTurnDisplay() {
  turnDisplay.textContent = `Player ${turn}'s Turn`;
}

function checkSquare(e) {}

function checkWinner() {
  if (
    boardArray[0] === boardArray[1] &&
    boardArray[2] == boardArray[1] &&
    boardArray[0]
  ) {
    console.log('Winner');
  }
}
