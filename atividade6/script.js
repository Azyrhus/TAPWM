const respostas = [];

document.getElementById("formPesquisa").addEventListener("submit", function(e) {
  e.preventDefault();

  const idade = parseInt(document.getElementById("idade").value);
  const sexo = document.getElementById("sexo").value;
  const opiniao = parseInt(document.getElementById("opiniao").value);

  respostas.push({ idade, sexo, opiniao });

  this.reset();
});

function mostrarResultados() {
  if (respostas.length === 0) {
    alert("Nenhuma resposta foi registrada ainda.");
    return;
  }

  const idades = respostas.map(r => r.idade);
  const mediaIdade = (idades.reduce((a, b) => a + b, 0) / idades.length).toFixed(1);
  const maisVelha = Math.max(...idades);
  const maisNova = Math.min(...idades);

  const pessimo = respostas.filter(r => r.opiniao === 1).length;
  const otimoBom = respostas.filter(r => r.opiniao === 4 || r.opiniao === 3).length;
  const porcentagemOtimoBom = ((otimoBom / respostas.length) * 100).toFixed(1);

  const totalSexos = respostas.reduce((acc, r) => {
    acc[r.sexo] = (acc[r.sexo] || 0) + 1;
    return acc;
  }, {});

  const resultadosHTML = `
    <p>Média de idade: <strong>${mediaIdade}</strong></p>
    <p>Pessoa mais velha: <strong>${maisVelha}</strong> anos</p>
    <p>Pessoa mais nova: <strong>${maisNova}</strong> anos</p>
    <p>Quantidade que respondeu "Péssimo": <strong>${pessimo}</strong></p>
    <p>Porcentagem que respondeu "Ótimo" ou "Bom": <strong>${porcentagemOtimoBom}%</strong></p>
    <p>Quantidade por sexo:</p>
    <ul>
      <li>Feminino: ${totalSexos["feminino"] || 0}</li>
      <li>Masculino: ${totalSexos["masculino"] || 0}</li>
      <li>Outros: ${totalSexos["outros"] || 0}</li>
    </ul>
  `;

  document.getElementById("resultados").innerHTML = resultadosHTML;
}
