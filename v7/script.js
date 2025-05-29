const TAMANHO = 10;
const NAVIOS_TAMANHOS = [4, 3, 2];

const playerBoard = document.getElementById("player-board");
const computerBoard = document.getElementById("computer-board");

let somAcerto = document.getElementById("som-acerto");
let somErro = document.getElementById("som-erro");
let somVitoria = document.getElementById("som-vitoria");
let somDerrota = document.getElementById("som-derrota");

const musicaFundo = new Audio("background.mp3");
musicaFundo.loop = true;
musicaFundo.volume = 0.2;
document.body.addEventListener("click", () => {
  musicaFundo.play();
}, { once: true });

let tabuleiroJogador = [];
let tabuleiroComputador = [];

let naviosJogador = NAVIOS_TAMANHOS.reduce((a, b) => a + b);
let naviosComputador = NAVIOS_TAMANHOS.reduce((a, b) => a + b);

let modoAlvo = false;
let ultimaJogadaBoa = null;
let proximosAlvos = [];

function criarMatriz(tabuleiro) {
  for (let i = 0; i < TAMANHO; i++) {
    tabuleiro[i] = [];
    for (let j = 0; j < TAMANHO; j++) {
      tabuleiro[i][j] = { temNavio: false, clicado: false, elemento: null };
    }
  }
}

function posicionarNavios(tabuleiro) {
  for (let tamanho of NAVIOS_TAMANHOS) {
    let colocado = false;
    while (!colocado) {
      let orientacao = Math.random() < 0.5 ? "horizontal" : "vertical";
      let x = Math.floor(Math.random() * TAMANHO);
      let y = Math.floor(Math.random() * TAMANHO);
      let podeColocar = true;
      for (let i = 0; i < tamanho; i++) {
        let xi = x + (orientacao === "vertical" ? i : 0);
        let yi = y + (orientacao === "horizontal" ? i : 0);
        if (xi >= TAMANHO || yi >= TAMANHO || tabuleiro[xi][yi].temNavio) {
          podeColocar = false;
          break;
        }
      }
      if (podeColocar) {
        for (let i = 0; i < tamanho; i++) {
          let xi = x + (orientacao === "vertical" ? i : 0);
          let yi = y + (orientacao === "horizontal" ? i : 0);
          tabuleiro[xi][yi].temNavio = true;
        }
        colocado = true;
      }
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
            somAcerto.play();
            naviosComputador--;
            if (naviosComputador === 0) {
              somVitoria.play();
              alert("Parabéns! Você venceu!");
              return;
            }
          } else {
            cell.classList.add("miss");
            somErro.play();
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

  if (modoAlvo && proximosAlvos.length > 0) {
    [x, y] = proximosAlvos.shift();
  } else {
    do {
      x = Math.floor(Math.random() * TAMANHO);
      y = Math.floor(Math.random() * TAMANHO);
    } while (tabuleiroJogador[x][y].clicado);
  }

  if (!tabuleiroJogador[x][y].clicado) {
    tabuleiroJogador[x][y].clicado = true;
    const cell = tabuleiroJogador[x][y].elemento;

    if (tabuleiroJogador[x][y].temNavio) {
      cell.classList.add("hit");
      somAcerto.play();
      naviosJogador--;

      modoAlvo = true;
      ultimaJogadaBoa = [x, y];
      calcularVizinhos(x, y);

      if (naviosJogador === 0) {
        somDerrota.play();
        alert("O computador venceu!");
      }
    } else {
      cell.classList.add("miss");
      somErro.play();
      if (proximosAlvos.length === 0) {
        modoAlvo = false;
        ultimaJogadaBoa = null;
      }
    }
  } else {
    jogadaComputador();
  }
}

function calcularVizinhos(x, y) {
  const direcoes = [
    [x - 1, y],
    [x + 1, y],
    [x, y - 1],
    [x, y + 1]
  ];
  proximosAlvos = direcoes.filter(([i, j]) =>
    i >= 0 && i < TAMANHO && j >= 0 && j < TAMANHO &&
    !tabuleiroJogador[i][j].clicado
  );
}

criarMatriz(tabuleiroJogador);
criarMatriz(tabuleiroComputador);
posicionarNavios(tabuleiroJogador);
posicionarNavios(tabuleiroComputador);
criarTabuleiroVisual(playerBoard, tabuleiroJogador);
criarTabuleiroVisual(computerBoard, tabuleiroComputador, true);
