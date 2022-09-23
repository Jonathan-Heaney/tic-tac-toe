'use strict';

// const gameBoard = (() => {
//   const boardArray = ['', '', '', '', '', '', '', '', ''];
//   const squares = document.querySelectorAll('.square');
//   for (let i = 0; i < boardArray.length; i++) {
//     squares[i].textContent = boardArray[i];
//   }
//   return { boardArray, squares };
// })();

const boardArray = ['', '', '', '', '', '', '', '', ''];
const squares = document.querySelectorAll('.square');
function displayBoard() {
  for (let i = 0; i < boardArray.length; i++) {
    squares[i].textContent = boardArray[i];
  }
}

squares.forEach((square) => {
  square.addEventListener('click', (e) => {
    boardArray[`${e.target.id}`] = 'x';
    displayBoard();
    console.log(e.target.id);
    console.log(boardArray);
  });
});
