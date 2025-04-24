const TAMANHO = 10;
const playerBoard = document.getElementById("player-board");
const computerBoard = document.getElementById("computer-board");

// Cria o tabuleiro visual (sem lógica ainda)
function criarTabuleiro(container) {
  for (let i = 0; i < TAMANHO * TAMANHO; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    container.appendChild(cell);
  }
}

criarTabuleiro(playerBoard);
criarTabuleiro(computerBoard);
