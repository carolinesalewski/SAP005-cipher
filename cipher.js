const cipher = {

  encode: function (offset, text) {

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let textEncoded = "";

    if (!/^([A-Za-z]+)$/.test(text) && (!/^(\d+)$/.test(offset) || offset == 0)) {
      throw new TypeError("Check the data type.");
    } // neste IF estou colocando uma condicional para o caso do usuário inserir um tipo de dado inconsistente com o que o programa quer.

    loop:
    for (let i = 0; i < text.length; i++) {
      if (text.charAt(i) == " ") {
        textEncoded = textEncoded + " ";
        continue loop;
      }

      let result = alphabet.search(text.charAt(i).toUpperCase()) + (parseInt(offset) % alphabet.length);

      if (result >= alphabet.length) {
        result = result - alphabet.length;
      }
      //essa condicional é para caso passe a posição 26 que é quando acaba o alfabeto, possa voltar pro inicio do alfabeto.
      textEncoded = textEncoded + alphabet.charAt(result);
    }//estou atribuindo um valor ao textcontent que é o retorno na posição 4 do alfabeto.

    return textEncoded;
  },
  decode: function (offset, textEncoded) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let textDecoded = "";

    if (!/^([A-Za-z]+)$/.test(textEncoded) && (!/^(\d+)$/.test(offset) || offset == 0)) {
      throw new TypeError();
    }

    loop2:
    for (let i = 0; i < textEncoded.length; i++) {
      if (textEncoded.charAt(i) == " ") {
        textDecoded = textDecoded + " ";
        continue loop2;
      }

      let result = alphabet.search(textEncoded.charAt(i).toUpperCase()) - (parseInt(offset) % alphabet.length);
      //estou fazendo o loop usando o resultado do texto codificado 
      if (result < 0) {
        result = result + alphabet.length;
      }

      textDecoded = textDecoded + alphabet.charAt(result);
    }

    return textDecoded;
  }
}

export default cipher;