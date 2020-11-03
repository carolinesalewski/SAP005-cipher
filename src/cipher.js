const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const quantidadeLetrasAlfabeto = 26;
let chave;
let texto;
let quantidadeDeCasas;
let chaveNome;

function criptografar(){
  
  chave = "";

  getTextoValidado();
  getQuantidadeDeCasasValidadas();  
  
  for (let i = 0; i < texto.length; i++){

    let resultado = alfabeto.search(texto.charAt(i).toUpperCase()) + (parseInt(quantidadeDeCasas) % quantidadeLetrasAlfabeto);
    
    if (resultado > quantidadeLetrasAlfabeto){
      resultado = resultado-25;
    }

    chave = chave + alfabeto.charAt(resultado);
  }

  imprimeNomeCriptografado();
}

function getTextoValidado(){
  texto = prompt("Insira o seu primeiro nome");

  if(!/^([A-Za-z]+)$/.test(texto)){
    alert("Insira seu nome, é permitido apenas letras!!");
    getTextoValidado();
  }
}

function getQuantidadeDeCasasValidadas(){
  quantidadeDeCasas = prompt ("Insira um numero de 1 a 25");

  if(!/^(\d{1,2})$/.test(quantidadeDeCasas)){
    alert("Insira somente numeros de 1 a 25!!");
    getQuantidadeDeCasasValidadas();
  }
}

function imprimeNomeCriptografado(){
  document.getElementById("criptografado").innerHTML = ("Olá "+ texto +" seu nome em Dothraki é <br>" + chave);
}

function descriptografar(){
  chaveNome = "";
  for (let i = 0; i < chave.length; i++){

    let resultado = alfabeto.search(chave.charAt(i).toUpperCase()) - (parseInt(quantidadeDeCasas) % quantidadeLetrasAlfabeto);
    
    if (resultado > quantidadeLetrasAlfabeto){
      resultado = resultado-25;
    }

    chaveNome = chaveNome + alfabeto.charAt(resultado);
  }

  imprimeNomeDescriptografado();
}

function imprimeNomeDescriptografado(){
  document.getElementById("descriptografado").innerHTML=("Seu nome não dothraki é <br>" + chaveNome)
}