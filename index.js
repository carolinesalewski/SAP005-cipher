import cipher from './cipher.js';

let encodeName = "";
let text = "";
let offset;

const button = document.getElementById("bt");
button.addEventListener("click", eventEncode);

const button2 = document.getElementById("bt2");
button2.addEventListener("click", eventDecode);

const button3 = document.getElementById("reset");
button3.addEventListener("click", reset);

function printEncodedName(text, textEncoded) {
    document.getElementById("encrypted").innerHTML = ("Sua frase criptografada é<br>" + textEncoded);
}
function printDecodedName(textDecoded) {
    document.getElementById("decrypted").innerHTML = ("Sua frase descriptografada é <br>" + textDecoded)
}

function getValidText() {
    text = prompt("Insira aqui a sua mensagem");
    return text;
}

function getOffsetValidated() {
    let offset1 = prompt("Insira aqui um numero, o mesmo irá ajudar a criptografar sua mensagem");
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

function reset(event) {
    event.preventDefault();
    document.getElementById("encrypted").innerHTML = ("");
    document.getElementById("decrypted").innerHTML = ("");
}