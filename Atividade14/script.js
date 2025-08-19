function validar2() {
  let form = document.formulario2.elements;
  let nome = form["nome"].value.trim();
  let email = form["email"].value.trim();
  let comentario = form["comentario"].value.trim();
  let pesquisa = document.querySelector('input[name="pesquisa"]:checked');
  if (nome.length < 10) {
    alert("Digite um nome com pelo menos 10 caracteres.");
    return false;
  }
  if (!email.includes("@") || !email.includes(".")) {
    alert("Digite um email válido.");
    return false;
  }
  if (comentario.length < 20) {
    alert("Seu comentário deve ter pelo menos 20 caracteres.");
    return false;
  }
  if (!pesquisa) {
    alert("Responda à pesquisa.");
    return false;
  } else {
    alert(pesquisa.value === "sim" ? 
      "Que bom que você voltou a visitar esta página!" : 
      "Volte sempre a esta página!"
    );
  }
  return true;
}