/* const cipher = {
  // ...
};

export default cipher;
*/
function encode(messageToEncode, offset) {
  //Sempre declarar os números que são usadas em setenças para que outros programadores que leia seu código saibam do que se trata
  const alphabetSize = 26;
  const aASCIIcode = 65;
  let finalMessage = "";
  //Condição inicial: 1o índice da string - JS lê string como array | Condição final: rodar o tamanho da string | Repetir para cada string    
  for (let i = 0; i < messageToEncode.length; i++) {
      // Achar o código ASCII da letra       
      const codeASCII = messageToEncode.charCodeAt(i)
      // Condicional para cifrar apenas o intervalo de letras maiúsculas do códgioASCII
      if (64 < codeASCII && codeASCII < 91) {
          /* Criptografar
            Achar o código ASCII da letra - código A = código do alfabeto (0-25)
           Somar o deslocamento e garantir o giro no alfabeto (módulo tamnho do alfabeto)
           Somar novamente o código da primeira letra ASC para o entendimento do JS
           Retorna r a string a partir do número do código
           */
          const cipher = (codeASCII - aASCIIcode + offset) % alphabetSize + aASCIIcode;
          finalMessage += String.fromCharCode(cipher);
      } else {
          finalMessage += String.fromCharCode(codeASCII);
      }
  }
  return finalMessage;
}

function decode(messageToEncode, offset) {
          /* Descriptografar: caminho inverso
          Cifrar: letra cifrada = (letra a cifrar + offset) % alfabeto;
          1. Achar o número de voltas: número interiro (offset/tamanho do alfabeto);
          2. Somar o código da letra a decifrar com (tamanho do alfabeto x o número de giro)
          3. Diminuir o offset para achar o código da letra cifrada
          letra cifrada + [número inteiro(offset/alfabeto)] * alfabeto - offset = letra a cifrar
           */
  const alphabetSize = 26;
  const aASCIIcode = 65;
  let finalMessage = "";
  const y = Math.floor (offset / alphabetSize) * alphabetSize;
  for (let i = 0; i < messageToEncode.length; i++) {
      const codeASCII = messageToEncode.charCodeAt(i)
      if (64 < codeASCII && codeASCII < 91) {
          const cipher = (codeASCII - aASCIIcode + y - offset) + aASCIIcode;
          finalMessage += String.fromCharCode(cipher);
      } else {
          finalMessage += String.fromCharCode(codeASCII);
      }
  }
  return finalMessage;
}
