const cipher = {
  encrypt(offset, message, method) {
    const messageToEncode = Array.from(message);
    const offsetNumber = offset;
    const alphabetLength = 26;
    const aCodeUpperCase = "A".charCodeAt();
    const zCodeUpperCase = "Z".charCodeAt();
    const aCodeLowerCase = "a".charCodeAt();
    const zCodeLowerCase = "z".charCodeAt();
    let finalMessage = "";

    if (!offsetNumber || !messageToEncode)
      throw new TypeError("invalid offset or string");
    else {
      messageToEncode.map((item) => {
        const codeASCII = item.charCodeAt();
        if (
          (aCodeUpperCase <= codeASCII && codeASCII <= zCodeUpperCase) ||
          (aCodeLowerCase <= codeASCII && codeASCII <= zCodeLowerCase)
        ) {
          const isLowerOrUpper =
            aCodeUpperCase <= codeASCII && codeASCII <= zCodeUpperCase
              ? aCodeUpperCase
              : aCodeLowerCase;
          if (method === "encode") {
            const letterEncoded = cipher.encode(
              codeASCII,
              isLowerOrUpper,
              offsetNumber,
              alphabetLength
            );
            return (finalMessage += String.fromCharCode(letterEncoded));
          }
          if (method === "decode") {
            const letterDecoded = cipher.decode(
              codeASCII,
              isLowerOrUpper,
              offsetNumber,
              alphabetLength
            );
            return (finalMessage += String.fromCharCode(letterDecoded));
          }
        } else {
          return (finalMessage += String.fromCharCode(codeASCII));
        }
      });
      return finalMessage;
    }
  },
  decode(codeASCII, letterACodeASCII, offsetNumber, alphabetLength) {
    return (
      ((codeASCII -
        letterACodeASCII -
        (offsetNumber % alphabetLength) +
        alphabetLength) %
        alphabetLength) +
      letterACodeASCII
    );
  },
  encode(codeASCII, letterACodeASCII, offsetNumber, alphabetLength) {
    return (
      ((codeASCII - letterACodeASCII + offsetNumber) % alphabetLength) +
      letterACodeASCII
    );
  },
};

export default cipher;
