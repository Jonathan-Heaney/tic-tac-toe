'use strict';

// const gameBoard = (() => {
//   const boardArray = ['', '', '', '', '', '', '', '', ''];
//   const squares = document.querySelectorAll('.square');
//   for (let i = 0; i < boardArray.length; i++) {
//     squares[i].textContent = boardArray[i];
//   }
//   return { boardArray, squares };
// })();

let turn = 'x';

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
  });
});

function switchTurn() {
  if (turn === 'x') {
    turn = 'o';
  } else turn = 'x';
}

function checkSquare(e) {}
