const cipher = {

  encode: function(quantidadeDeCasas, texto){

    const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const quantidadeLetrasAlfabeto = 26;
    
    let chave = "";

    for (let i = 0; i < texto.length; i++){

      let resultado = alfabeto.search(texto.charAt(i).toUpperCase()) + (parseInt(quantidadeDeCasas) % quantidadeLetrasAlfabeto);
      
      if (resultado > quantidadeLetrasAlfabeto){
        resultado = resultado-25;
      }

      chave = chave + alfabeto.charAt(resultado);
    }

    return chave;
  },
  decode:function(quantidadeDeCasas, chave){
    const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const quantidadeLetrasAlfabeto = 26;

    let chaveNome = "";
    for (let i = 0; i < chave.length; i++){

      let resultado = alfabeto.search(chave.charAt(i).toUpperCase()) - (parseInt(quantidadeDeCasas) % quantidadeLetrasAlfabeto);
      
      if (resultado > quantidadeLetrasAlfabeto){
        resultado = resultado-25;
      }

      chaveNome = chaveNome + alfabeto.charAt(resultado);
    }

    return chaveNome;
  }
}

export default cipher;