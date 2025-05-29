// tabuleiro.test.js

function criarMatriz(tabuleiro) {
  for (let i = 0; i < 10; i++) {
    tabuleiro[i] = [];
    for (let j = 0; j < 10; j++) {
      tabuleiro[i][j] = { temNavio: false, clicado: false, elemento: null };
    }
  }
  return tabuleiro;
}

test("criarMatriz deve gerar uma matriz 10x10", () => {
  const tabuleiro = [];
  criarMatriz(tabuleiro);
  expect(tabuleiro.length).toBe(10);
  expect(tabuleiro[0].length).toBe(10);
});

test("todas as células devem ter temNavio false e clicado false", () => {
  const tabuleiro = [];
  criarMatriz(tabuleiro);
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      expect(tabuleiro[i][j].temNavio).toBe(false);
      expect(tabuleiro[i][j].clicado).toBe(false);
      expect(tabuleiro[i][j].elemento).toBe(null);
    }
  }
});
