const TAMANHO = 10;
const NUM_NAVIOS = 5;
const playerBoard = document.getElementById("player-board");
const computerBoard = document.getElementById("computer-board");


let tabuleiroComputador = [];
let naviosRestantes = NUM_NAVIOS;

function criarMatriz(tabuleiro) {
  for (let i = 0; i < TAMANHO; i++) {
    tabuleiro[i] = [];
    for (let j = 0; j < TAMANHO; j++) {
      tabuleiro[i][j] = { temNavio: false, clicado: false, elemento: null };
    }
  }
}

function posicionarNavios(tabuleiro) {
  let colocados = 0;
  while (colocados < NUM_NAVIOS) {
    let x = Math.floor(Math.random() * TAMANHO);
    let y = Math.floor(Math.random() * TAMANHO);
    if (!tabuleiro[x][y].temNavio) {
      tabuleiro[x][y].temNavio = true;
      colocados++;
    }
  }
}

function criarTabuleiroVisual(container, tabuleiro, isComputador = false) {
  for (let i = 0; i < TAMANHO; i++) {
    for (let j = 0; j < TAMANHO; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      container.appendChild(cell);

      tabuleiro[i][j].elemento = cell;

      if (isComputador) {
        cell.addEventListener("click", () => {
          if (tabuleiro[i][j].clicado || naviosRestantes === 0) return;
          tabuleiro[i][j].clicado = true;
          if (tabuleiro[i][j].temNavio) {
            cell.classList.add("hit");
            naviosRestantes--;
            if (naviosRestantes === 0) alert("Parabéns! Você venceu!");
          } else {
            cell.classList.add("miss");
          }
        });
      }
    }
  }
}

criarMatriz(tabuleiroComputador);
posicionarNavios(tabuleiroComputador);
criarTabuleiroVisual(playerBoard, Array.from({ length: TAMANHO }, () => Array(TAMANHO).fill({})));
criarTabuleiroVisual(computerBoard, tabuleiroComputador, true);
