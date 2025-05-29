const { criarMatriz } = require('../core');

// Copiamos a lógica da função calcularVizinhos para testar isoladamente
function calcularVizinhos(x, y, tabuleiro) {
  const TAMANHO = 10;
  const direcoes = [
    [x - 1, y],
    [x + 1, y],
    [x, y - 1],
    [x, y + 1]
  ];
  return direcoes.filter(([i, j]) =>
    i >= 0 && i < TAMANHO && j >= 0 && j < TAMANHO &&
    !tabuleiro[i][j].clicado
  );
}

test("calcularVizinhos retorna vizinhos válidos e não clicados", () => {
  const tabuleiro = [];
  criarMatriz(tabuleiro);

  // Marca uma célula como já clicada para testar a filtragem
  tabuleiro[4][5].clicado = true;

  const resultado = calcularVizinhos(5, 5, tabuleiro);

  // Vizinhos esperados: (4,5) [clicado, será ignorado], (6,5), (5,4), (5,6)
  expect(resultado).toEqual([
    [6, 5],
    [5, 4],
    [5, 6]
  ]);
});
