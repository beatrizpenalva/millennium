import cipher from './cipher.js';
console.log(cipher);
//evento do click para acionar a função - antes não precisava por que?
document.getElementById("encode").addEventListener('click', printTextCoded);
//função para mandar pro cipher os parâmetros da função encode e printar na tela o resultado
function printTextCoded() {
    //declarar a variável messageToEncode que é um dos parâmetros da função cipher e pegar por ID o valor do input
    let messageToEncode = document.getElementById("textToEncode").value;
    //garantir que as letras estarão em letra maiúscula por conta do intervalo do código ASCII
    messageToEncode = messageToEncode.toUpperCase();
    //pegar o valor do offset do input pra mandar pra função cipher (o segundo parâmetro)
    const offset = Number(document.getElementById("offset").value);
    //enviando os valores do input como parâmetros da função cipher
    const encodedMessage = cipher.encode (messageToEncode, offset);
    //printando na tela a mensagem codificada
    document.getElementById("textResult").innerText = encodedMessage;
}
//evento do click para acionar a função - antes não precisava por que?
document.getElementById("decode").addEventListener('click', printTextDecoded);
//criar a função pra disparar o botão de decifrar, outra forma de fazer isso seria usando eventos
function printTextDecoded() {
    //declarar a variável messageToEncode que é um dos parâmetros da função cipher e pegar por ID o valor do input
    let messageToEncode = document.getElementById("textToEncode").value;
    //garantir que as letras estarão em letra maiúscula por conta do intervalo do código ASCII
    messageToEncode = messageToEncode.toUpperCase();
    //pegar o valor do offset do input pra mandar pra função cipher (o segundo parâmetro)
    const offset = Number(document.getElementById("offset").value);
    //enviando os valores do input como parâmetros da função cipher
    const decodedMessage = cipher.decode (messageToEncode, offset);
    //printando na tela a mensagem codificada
    document.getElementById("textResult").innerText = decodedMessage;
}
