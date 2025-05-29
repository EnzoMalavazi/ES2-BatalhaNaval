const { criarMatriz, posicionarNavios } = require('../core');

test("posicionarNavios deve posicionar exatamente 9 partes de navio", () => {
  const tabuleiro = [];
  criarMatriz(tabuleiro);
  posicionarNavios(tabuleiro);

  let totalNavios = 0;
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (tabuleiro[i][j].temNavio) totalNavios++;
    }
  }

  expect(totalNavios).toBe(9); // 4 + 3 + 2
});
