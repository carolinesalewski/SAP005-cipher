import cipher from './cipher.js';

let encodeName = "";
let texto = "";
let quantidadeDeCasas;

const button = document.getElementById("bt");
button.addEventListener("click", eventEncode);

const button2 = document.getElementById("bt2");
button2.addEventListener("click", eventDecode);

function imprimeNomeCriptografado(texto, chave){
    document.getElementById("criptografado").innerHTML = ("Olá "+ texto +" seu nome em Dothraki é <br>" + "KHAL " + chave);
}
function imprimeNomeDescriptografado(chaveNome){
  document.getElementById("descriptografado").innerHTML=("Seu nome não Dothraki é <br>" + chaveNome)
}

function getTextoValidado(){
    texto = prompt("Insira o seu primeiro nome");
  
    if(!/^([A-Za-z]+)$/.test(texto)){
      alert("Insira seu nome, é permitido apenas letras!!");
      getTextoValidado();
    } 
    return texto;
  }
  
  function getQuantidadeDeCasasValidadas(){
    let quantidade = prompt ("Insira um numero de 1 a 25");
  
    if(!/^(\d{1,2})$/.test(quantidade)){
      alert("Insira somente numeros de 1 a 25!!");
      getQuantidadeDeCasasValidadas();
    } 
    quantidadeDeCasas = quantidade;
  }

  function eventEncode(event){
    event.preventDefault();
    let texto = getTextoValidado();
    getQuantidadeDeCasasValidadas();
    
    encodeName = cipher.encode(quantidadeDeCasas, texto);

    imprimeNomeCriptografado(texto, encodeName);
  }

  function eventDecode(event){
    event.preventDefault();
    let decodeName = cipher.decode(quantidadeDeCasas, encodeName);

    imprimeNomeDescriptografado(decodeName);
  }

