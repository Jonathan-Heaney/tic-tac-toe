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
    if (winner) return;
    boardArray[`${e.target.id}`] = `${turn}`;
    displayBoard();
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

let winner;

function checkWinner() {
  checkRowWinner();
  checkColumnWinner();
  checkDiagonalWinner();
}

function checkRowWinner() {
  if (
    boardArray[0] === boardArray[1] &&
    boardArray[0] === boardArray[2] &&
    boardArray[0]
  ) {
    winner = `${boardArray[0]}`;
    showWinner();
  } else if (
    boardArray[3] === boardArray[4] &&
    boardArray[3] === boardArray[5] &&
    boardArray[3]
  ) {
    winner = `${boardArray[3]}`;
    showWinner();
  } else if (
    boardArray[6] === boardArray[7] &&
    boardArray[6] === boardArray[8] &&
    boardArray[6]
  ) {
    winner = `${boardArray[6]}`;
    showWinner();
  }
}

function checkColumnWinner() {
  if (
    boardArray[0] === boardArray[3] &&
    boardArray[0] === boardArray[6] &&
    boardArray[0]
  ) {
    winner = `${boardArray[0]}`;
    showWinner();
  } else if (
    boardArray[1] === boardArray[4] &&
    boardArray[1] === boardArray[7] &&
    boardArray[1]
  ) {
    winner = `${boardArray[1]}`;
    showWinner();
  } else if (
    boardArray[2] === boardArray[5] &&
    boardArray[2] === boardArray[8] &&
    boardArray[2]
  ) {
    winner = `${boardArray[2]}`;
    showWinner();
  }
}

function checkDiagonalWinner() {
  if (
    boardArray[0] === boardArray[4] &&
    boardArray[0] === boardArray[8] &&
    boardArray[0]
  ) {
    winner = `${boardArray[0]}`;
    showWinner();
  } else if (
    boardArray[2] === boardArray[4] &&
    boardArray[2] === boardArray[6] &&
    boardArray[2]
  ) {
    winner = `${boardArray[2]}`;
    showWinner();
  }
}

function showWinner() {
  turnDisplay.textContent = `Player ${winner} has won!`;
}
