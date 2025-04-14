//your JS code here. If required.
let currentPlayer = 'X';
let player1 = '';
let player2 = '';
let board = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

document.getElementById("submit").addEventListener("click", () => {
  player1 = document.getElementById("player-1").value;
  player2 = document.getElementById("player-2").value;

  if (player1 && player2) {
    document.getElementById("player-inputs").style.display = "none";
    document.getElementById("game").style.display = "block";
    updateMessage();
  }
});

document.querySelectorAll(".cell").forEach(cell => {
  cell.addEventListener("click", () => {
    const id = parseInt(cell.id) - 1;

    if (board[id] === '' && !gameOver) {
      board[id] = currentPlayer;
      cell.textContent = currentPlayer;

      if (checkWin()) {
        document.querySelector(".message").textContent = 
          `${currentPlayer === 'X' ? player1 : player2}, congratulations you won!`;
        highlightWinningCells();
        gameOver = true;
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        updateMessage();
      }
    }
  });
});

function updateMessage() {
  document.querySelector(".message").textContent =
    `${currentPlayer === 'X' ? player1 : player2}, you're up`;
}

function checkWin() {
  const winCombos = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  return winCombos.some(combo => {
    const [a,b,c] = combo;
    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      document.querySelectorAll('.cell')[a].classList.add('win');
      document.querySelectorAll('.cell')[b].classList.add('win');
      document.querySelectorAll('.cell')[c].classList.add('win');
      return true;
    }
    return false;
  });
}

function highlightWinningCells() {
  // Already handled in checkWin for simplicity
}
