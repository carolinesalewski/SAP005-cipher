import cipher from './cipher.js';

let encodeName = "";
let text = "";
let offset;

const button = document.getElementById("bt");
button.addEventListener("click", eventEncode);

const button2 = document.getElementById("bt2");
button2.addEventListener("click", eventDecode);

function printEncodedName(text, textEncoded) {
    document.getElementById("criptografado").innerHTML = ("Olá " + text + " seu nome em Dothraki é <br>" + "KHAL " + textEncoded);
}
function printDecodedName(textDecoded) {
    document.getElementById("descriptografado").innerHTML = ("Seu nome não Dothraki é <br>" + textDecoded)
}

function getValidText() {
    text = prompt("Insira o seu primeiro nome");

    // if(!/^([A-Za-z]+)$/.test(text)){
    //   alert("Insira seu nome, é permitido apenas letras!!");
    //   getValidText();
    // } 
    return text;
}

function getOffsetValidated() {
    let offset1 = prompt("Insira sua idade");

    // if(!/^(\d{1,2})$/.test(offset1)){
    //   alert("Insira somente numeros de 1 a 25!!");
    //   getOffsetValidated();
    // } 
    offset = parseInt(offset1);
}

function eventEncode(event) {
    event.preventDefault();
    let text = getValidText();
    getOffsetValidated();

    encodeName = cipher.encode(offset, text);

    printEncodedName(text, encodeName);
}

function eventDecode(event) {
    event.preventDefault();
    let decodeName = cipher.decode(offset, encodeName);

    printDecodedName(decodeName);
}

