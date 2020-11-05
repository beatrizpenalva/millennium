const cipher = {
  encode(offset, messageToEncode) {
    const alphabetSize = 26;
    const aASCIIcode = 65;
    let finalMessage = "";
    for (let i = 0; i < messageToEncode.length; i++) {
      const codeASCII = messageToEncode.charCodeAt(i)
      if (64 < codeASCII && codeASCII < 91) {
        const cipher = (codeASCII - aASCIIcode + offset) % alphabetSize + aASCIIcode;
        finalMessage += String.fromCharCode(cipher);
      } else {
        finalMessage += String.fromCharCode(codeASCII);
      }
    }
    return finalMessage;
  },
  decode(offset, messageToEncode) {
    const alphabetSize = 26;
    const aASCIIcode = 65;
    let finalMessage = "";
    for (let i = 0; i < messageToEncode.length; i++) {
      const codeASCII = messageToEncode.charCodeAt(i)
      if (64 < codeASCII && codeASCII < 91) {
        //const y = Math.floor(offset / alphabetSize) * alphabetSize;
        // let decodificado = ((decifrar - 65 -(offsetdec % 26) + 26) % 26) + 65;
        //offset % alphabetSize = tirando o número de vezes que roda o alfabeto todo temos o real offset
        // módulo para garantir o giro caso exceda
        const cipher = ((codeASCII - aASCIIcode - (offset % alphabetSize) + 26) % alphabetSize + aASCIIcode);
        finalMessage += String.fromCharCode(cipher);
      } else {
        finalMessage += String.fromCharCode(codeASCII);
      }
    }
    return finalMessage;
  }
};
export default cipher;
/*
decode

caixa para texto; > colocar na minha variavel texto
caixa para o offset; colocar na minha variavel offset
display do resultado
botão codificar > onclick ou event que chame o botão e
*/