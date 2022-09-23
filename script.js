'use strict';

const gameBoard = (() => {
  const boardArray = ['', '', '', '', '', '', '', '', ''];
  const squares = document.querySelectorAll('.square');
  for (let i = 0; i < boardArray.length; i++) {
    squares[i].textContent = boardArray[i];
  }
  return { boardArray, squares };
})();
