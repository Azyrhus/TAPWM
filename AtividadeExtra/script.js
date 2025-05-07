function ex1() {
  let numeros = document.getElementById("nums").value.split(",");
  let n1 = parseFloat(numeros[0]);
  let n2 = parseFloat(numeros[1]);
  let n3 = parseFloat(numeros[2]);
  let soma = n1 + n2 + n3;
  let qn1 = n1 * n1;
  let qn2 = n2 * n2;
  document.getElementById("res1").textContent = "A soma dos 3 números é " + soma + ", O quadrado do primeiro é " + qn1 + ", O quadrado do segundo é " + qn2;
}
function ex2() {
  let letras = document.getElementById("letras").value.toUpperCase().split(",");
  let palavras = [];
  function gerarPalavra(usadas, palavra) {
    if (palavra.length === 5) {
      palavras.push(palavra);
      return;
    }
    for (let i = 0; i < usadas.length; i++) {
      let nova = usadas.slice();
      nova.splice(i, 1);
      gerarPalavra(nova, palavra + usadas[i]);
      if (palavras.length >= 10) return;
    }
  }
  gerarPalavra(letras, "");
  document.getElementById("res2").textContent = palavras.join(", ");
}