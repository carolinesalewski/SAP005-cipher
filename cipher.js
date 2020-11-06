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
      //o charAt vai pegar a letra da posição indicada pelo loop no texto inserido, o alphabet.search vai buscar a letra indicada e vai transformar em letra maiuscula. O parseInt vai transformar em numero inteiro a quantidade de offset indicada e ira fazer o módulo da quantidade de letras do alfabeto. ex: offset: 2 text: carol. CharAt pegara posição 0 (c) , transformou em maiuscula (C) e vai buscar pelo alphabet search a posição indicada da palavra(c esta na posição 2 do alfabeto),pegou a quantidade de offset(2) e fez modulo de 26 que da 2. 2+2 = 4
      //result agora é = 4 ou seja, a posição 4 do alfabeto.

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