const cipher = {

  encode: function (offset, text) {

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let textEncoded = "";

    if (!/^([A-Za-z]+)$/.test(text) && (!/^(\d+)$/.test(offset) || offset == 0)) {
      throw new TypeError();
    }

    for (let i = 0; i < text.length; i++) {

      let result = alphabet.search(text.charAt(i).toUpperCase()) + (parseInt(offset) % alphabet.length);

      if (result >= alphabet.length) {
        result = result - alphabet.length;
      }

      textEncoded = textEncoded + alphabet.charAt(result);
    }

    return textEncoded;
  },
  decode: function (offset, textEncoded) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //HIJKLMNOPQRSTUVWXYZABCDEFG
    let textDecoded = "";

    if (!/^([A-Za-z]+)$/.test(textEncoded) && (!/^(\d+)$/.test(offset) || offset == 0)) {
      throw new TypeError();
    }

    for (let i = 0; i < textEncoded.length; i++) {

      let result = alphabet.search(textEncoded.charAt(i).toUpperCase()) - (parseInt(offset) % alphabet.length);

      if (result < 0) {
        result = result + alphabet.length;
      }

      textDecoded = textDecoded + alphabet.charAt(result);
    }

    return textDecoded;
  }
}

export default cipher;