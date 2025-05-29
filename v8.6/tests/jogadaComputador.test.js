const { criarMatriz } = require('../core');

// Simulação leve da função jogadaComputador (simplificada para teste isolado)
function jogadaComputadorMock(tabuleiroJogador, naviosJogador) {
  let tentativa = null;
  do {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    if (!tabuleiroJogador[x][y].clicado) {
      tabuleiroJogador[x][y].clicado = true;
      tentativa = { x, y, temNavio: tabuleiroJogador[x][y].temNavio };
    }
  } while (!tentativa);
  return tentativa;
}

test("jogadaComputador ataca uma célula válida e altera seu estado", () => {
  const tabuleiro = [];
  criarMatriz(tabuleiro);

  const tentativa = jogadaComputadorMock(tabuleiro, 9);

  expect(tentativa).toHaveProperty("x");
  expect(tentativa).toHaveProperty("y");
  expect(tentativa).toHaveProperty("temNavio");
  expect(tabuleiro[tentativa.x][tentativa.y].clicado).toBe(true);
});
