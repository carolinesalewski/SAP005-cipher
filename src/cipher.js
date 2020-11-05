const cipher = {

  encode: function (quantidadeDeCasas, texto) {

    const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let chave = "";

    if (!/^([A-Za-z]+)$/.test(texto) && (!/^(\d+)$/.test(quantidadeDeCasas) || quantidadeDeCasas == 0)) {
      throw new TypeError();
    }

    for (let i = 0; i < texto.length; i++) {

      let resultado = alfabeto.search(texto.charAt(i).toUpperCase()) + (parseInt(quantidadeDeCasas) % alfabeto.length);

      if (resultado >= alfabeto.length) {
        resultado = resultado - alfabeto.length;
      }

      chave = chave + alfabeto.charAt(resultado);
    }

    return chave;
  },
  decode: function (quantidadeDeCasas, chave) {
    const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //HIJKLMNOPQRSTUVWXYZABCDEFG
    let chaveNome = "";

    if (!/^([A-Za-z]+)$/.test(chave) && (!/^(\d+)$/.test(quantidadeDeCasas) || quantidadeDeCasas == 0)) {
      throw new TypeError();
    }

    for (let i = 0; i < chave.length; i++) {

      let resultado = alfabeto.search(chave.charAt(i).toUpperCase()) - (parseInt(quantidadeDeCasas) % alfabeto.length);

      if (resultado < 0) {
        resultado = resultado + alfabeto.length;
      }

      chaveNome = chaveNome + alfabeto.charAt(resultado);
    }

    return chaveNome;
  }
}

export default cipher;