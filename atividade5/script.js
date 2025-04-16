function jogar(jogadorEscolha) {
  const opcoes = ["pedra", "papel", "tesoura"];
  const cpuEscolha = opcoes[Math.floor(Math.random() * 3)];
  
  document.getElementById("escolha").textContent = `Você escolheu ${jogadorEscolha}, CPU escolheu ${cpuEscolha}.`;

  let resultado = "";
  let motivo = "";

  if (jogadorEscolha === cpuEscolha) {
    resultado = "Empate!";
    motivo = "Escolheram o mesmo.";
  } else if (
    (jogadorEscolha === "pedra" && cpuEscolha === "tesoura") ||
    (jogadorEscolha === "papel" && cpuEscolha === "pedra") ||
    (jogadorEscolha === "tesoura" && cpuEscolha === "papel")
  ) {
    resultado = "Parabéns você venceu!";
    motivo = getMotivo(jogadorEscolha, cpuEscolha);
  } else {
    resultado = "Que vergonha você perdeu para CPU!";
    motivo = getMotivo(cpuEscolha, jogadorEscolha);
  }

  document.getElementById("mensagem").textContent = `${resultado} ${motivo}`;
  animarResultado();
}

function getMotivo(vencedor, perdedor) {
  if (vencedor === "pedra" && perdedor === "tesoura") return "A pedra quebra a tesoura.";
  if (vencedor === "papel" && perdedor === "pedra") return "o papel cobre a pedra.";
  if (vencedor === "tesoura" && perdedor === "papel") return "a tesoura corta o papel.";
}

function animarResultado() {
  const resultadoDiv = document.querySelector(".resultado");

  resultadoDiv.classList.remove("fade-in");

  void resultadoDiv.offsetWidth;

  resultadoDiv.classList.add("fade-in");
}
