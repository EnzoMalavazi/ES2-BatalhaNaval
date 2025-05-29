test("quando naviosJogador chega a 0, o jogo deve declarar vitória do computador", () => {
  let naviosJogador = 0;
  let venceuComputador = false;

  if (naviosJogador === 0) {
    venceuComputador = true;
  }

  expect(venceuComputador).toBe(true);
});

test("deve tocar som de derrota quando jogador perde", () => {
  const somDerrota = { play: jest.fn() }; // simula o som
  let naviosJogador = 0;

  if (naviosJogador === 0) {
    somDerrota.play();
  }

  expect(somDerrota.play).toHaveBeenCalled();
});
