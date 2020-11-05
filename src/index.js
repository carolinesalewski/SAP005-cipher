import cipher from './cipher.js';

let encodeName = "";
let texto = "";
let offset;

const button = document.getElementById("bt");
button.addEventListener("click", eventEncode);

const button2 = document.getElementById("bt2");
button2.addEventListener("click", eventDecode);

function imprimeNomeCriptografado(texto, textEncoded) {
    document.getElementById("criptografado").innerHTML = ("Olá " + texto + " seu nome em Dothraki é <br>" + "KHAL " + textEncoded);
}
function imprimeNomeDescriptografado(chaveNome) {
    document.getElementById("descriptografado").innerHTML = ("Seu nome não Dothraki é <br>" + chaveNome)
}

function getTextoValidado() {
    texto = prompt("Insira o seu primeiro nome");

    // if(!/^([A-Za-z]+)$/.test(texto)){
    //   alert("Insira seu nome, é permitido apenas letras!!");
    //   getTextoValidado();
    // } 
    return texto;
}

function getoffsetValidadas() {
    let quantidade = prompt("Insira sua idade");

    // if(!/^(\d{1,2})$/.test(quantidade)){
    //   alert("Insira somente numeros de 1 a 25!!");
    //   getoffsetValidadas();
    // } 
    offset = parseInt(quantidade);
}

function eventEncode(event) {
    event.preventDefault();
    let texto = getTextoValidado();
    getoffsetValidadas();

    encodeName = cipher.encode(offset, texto);

    imprimeNomeCriptografado(texto, encodeName);
}

function eventDecode(event) {
    event.preventDefault();
    let decodeName = cipher.decode(offset, encodeName);

    imprimeNomeDescriptografado(decodeName);
}

