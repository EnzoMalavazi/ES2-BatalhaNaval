const TAMANHO = 10;
const NUM_NAVIOS = 5;
const playerBoard = document.getElementById("player-board");
const computerBoard = document.getElementById("computer-board");

let tabuleiroJogador = [];
let tabuleiroComputador = [];
let naviosJogador = NUM_NAVIOS;
let naviosComputador = NUM_NAVIOS;

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
          if (tabuleiro[i][j].clicado || naviosComputador === 0 || naviosJogador === 0) return;

          tabuleiro[i][j].clicado = true;

          if (tabuleiro[i][j].temNavio) {
            cell.classList.add("hit");
            naviosComputador--;
            if (naviosComputador === 0) {
              alert("Parabéns! Você venceu!");
              return;
            }
          } else {
            cell.classList.add("miss");
          }

          setTimeout(jogadaComputador, 700);
        });
      }
    }
  }
}

function jogadaComputador() {
  if (naviosJogador === 0) return;

  let x, y;
  do {
    x = Math.floor(Math.random() * TAMANHO);
    y = Math.floor(Math.random() * TAMANHO);
  } while (tabuleiroJogador[x][y].clicado);

  tabuleiroJogador[x][y].clicado = true;

  const cell = tabuleiroJogador[x][y].elemento;

  if (tabuleiroJogador[x][y].temNavio) {
    cell.classList.add("hit");
    naviosJogador--;
    if (naviosJogador === 0) {
      alert("O computador venceu!");
    }
  } else {
    cell.classList.add("miss");
  }
}

criarMatriz(tabuleiroJogador);
criarMatriz(tabuleiroComputador);
posicionarNavios(tabuleiroJogador);
posicionarNavios(tabuleiroComputador);
criarTabuleiroVisual(playerBoard, tabuleiroJogador);
criarTabuleiroVisual(computerBoard, tabuleiroComputador, true);
