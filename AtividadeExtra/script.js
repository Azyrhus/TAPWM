function exercicio1() {
  const entrada = document.getElementById("numeros").value;
  const arr = entrada.split(",").map(Number);
  const soma = arr.reduce((a, b) => a + b);
  const quadradoPrimeiro = arr[0] ** 2;
  const quadradoSegundo = arr[1] ** 2;

  return document.getElementById("resultado1").innerText =
    `A soma dos três números é: ${soma}, o quadrado do primeiro é: ${quadradoPrimeiro} e o quadrado do segundo é: ${quadradoSegundo}`;
}
function exercicio2() {
  const entrada = document.getElementById("letras").value;
  const letras = entrada.split(",");
  const palavras = [];
  for (let i = 0; i < 10; i++) {
    let palavra = '';
    for (let j = 0; j < 5; j++) {
      palavra += letras[Math.floor(Math.random() * letras.length)];
    }
    palavras.push(palavra);
  }
  return document.getElementById("resultado2").innerText = palavras.join(", ");
}
