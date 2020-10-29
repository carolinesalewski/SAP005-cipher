function criptografar(){
  
  var chave = "";
  let texto = prompt("Insira o seu primeiro nome");
  let quantidadeDeCasas = prompt ("Insira o primeiro numero da sua idade");
  const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  for (let i = 0; i < texto.length; i++){
      let resultado = alfabeto.search(texto.charAt(i).toUpperCase()) + parseInt(quantidadeDeCasas);
      if (resultado>25){
          resultado=resultado-24;
      }
    chave = chave + alfabeto.charAt(resultado);
    }
  let id = document.getElementById("criptografado");
  id.textContent = ("Olá "+ texto +" Seu nome em Dothraki é" + chave);
}