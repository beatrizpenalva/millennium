const cipher = {
  encode(offset, messageToEncode) {
    const alphabetSize = 26;
    let finalMessage = "";
    if ((offset !== 0 && offset !== null) && (messageToEncode !== "" && messageToEncode !== 0)) {
      for (let i = 0; i < messageToEncode.length; i++) {
        const codeASCII = messageToEncode.charCodeAt(i)
        if (64 < codeASCII && codeASCII < 91) {
          const cipher = (codeASCII - "A".charCodeAt() + offset) % alphabetSize + "A".charCodeAt();
          finalMessage += String.fromCharCode(cipher);
        } else {
          finalMessage += String.fromCharCode(codeASCII);
        }
      }
      return finalMessage;
    } else {
      throw new TypeError ('invalid offset or string');
    }
  },
  decode(offset, messageToEncode) {
    const alphabetSize = 26;
    let finalMessage = "";
    if ((offset !== 0 && offset !== null) && (messageToEncode !== "" && messageToEncode !== 0)) {
      for (let i = 0; i < messageToEncode.length; i++) {
        const codeASCII = messageToEncode.charCodeAt(i)
        if (64 < codeASCII && codeASCII < 91) {
          const cipher = ((codeASCII - "A".charCodeAt() - (offset % alphabetSize) + alphabetSize) % alphabetSize + "A".charCodeAt());
          finalMessage += String.fromCharCode(cipher);
        } else {
          finalMessage += String.fromCharCode(codeASCII);
        }
      }
      return finalMessage;
    } else {
      throw new TypeError ('invalid offset or string');
    }
  }
};
export default cipher;
