const TAMANHO = 10;
const playerBoard = document.getElementById("player-board");
const computerBoard = document.getElementById("computer-board");

function criarTabuleiro(container, isComputador = false) {
  for (let i = 0; i < TAMANHO * TAMANHO; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    if (isComputador) {
      cell.addEventListener("click", () => {
        if (cell.classList.contains("hit") || cell.classList.contains("miss")) {
          return;
        }

        const acertou = Math.random() < 0.3;
        cell.classList.add(acertou ? "hit" : "miss");
      });
    }

    container.appendChild(cell);
  }
}

criarTabuleiro(playerBoard);
criarTabuleiro(computerBoard, true);
