const TAMANHO = 10;

function criarMatriz(tabuleiro) {
  for (let i = 0; i < TAMANHO; i++) {
    tabuleiro[i] = [];
    for (let j = 0; j < TAMANHO; j++) {
      tabuleiro[i][j] = { temNavio: false, clicado: false, elemento: null };
    }
  }
  return tabuleiro;
}

function posicionarNavios(tabuleiro) {
  const NAVIOS_TAMANHOS = [4, 3, 2];
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
  return tabuleiro;
}

module.exports = { criarMatriz, posicionarNavios };
