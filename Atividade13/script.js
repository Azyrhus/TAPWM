function transformarTexto(){
  let txt=document.getElementById("meuTexto");
  if(document.getElementById("maiuscula").checked){
    txt.value=txt.value.toUpperCase();
  }else if(document.getElementById("minuscula").checked){
    txt.value=txt.value.toLowerCase();
  }
}
