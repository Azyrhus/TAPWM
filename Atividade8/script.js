function mostrarMaior() {
  const n1 = Number(document.getElementById("n1").value);
  const n2 = Number(document.getElementById("n2").value);
  const n3 = Number(document.getElementById("n3").value);
  const maior = Math.max(n1, n2, n3);
  document.getElementById("resultadoMaior").innerText = `Maior número: ${maior}`;
}
function ordenarNumeros() {
  const n1 = Number(document.getElementById("n1").value);
  const n2 = Number(document.getElementById("n2").value);
  const n3 = Number(document.getElementById("n3").value);
  const ordenado = [n1, n2, n3].sort((a, b) => a - b);
  document.getElementById("resultadoOrdenado").innerText = `Ordem crescente: ${ordenado.join(", ")}`;
}
function verificarPalindromo() {
  const texto = document.getElementById("texto").value;
  const limpo = texto.toLowerCase().replace(/\s+/g, '');
  const reverso = limpo.split('').reverse().join('');
  const ehPalindromo = limpo === reverso;
  document.getElementById("resultadoPalindromo").innerText = ehPalindromo ? "É um palíndromo!" : "Não é um palíndromo.";
}
function calcularMedia() {
  const n1 = Number(document.getElementById("n1").value);
  const n2 = Number(document.getElementById("n2").value);
  const n3 = Number(document.getElementById("n3").value);
  const media = ((n1 + n2 + n3) / 3).toFixed(2);
  document.getElementById("resultadoMedia").innerText = `Média: ${media}`;
}
