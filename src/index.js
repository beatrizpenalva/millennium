import cipher from './cipher.js';
document.getElementById("encode").addEventListener('click', printTextCoded);
function printTextCoded() {
    const offset = Number(document.getElementById("offset").value);
    const messageToEncode = document.getElementById("textToEncode").value.toUpperCase();
    const encodedMessage = cipher.encode(offset, messageToEncode);
    document.getElementById("textResult").innerText = encodedMessage;
}
document.getElementById("decode").addEventListener('click', printTextDecoded);
function printTextDecoded() {
    const offset = Number(document.getElementById("offset").value);
    const messageToEncode = document.getElementById("textToEncode").value.toUpperCase();
    const decodedMessage = cipher.decode(offset, messageToEncode);
    document.getElementById("textResult").innerText = decodedMessage;
}
document.getElementById("copyText").addEventListener('click', copyTextResult);
function copyTextResult() {
    document.getElementById("textResult").select();
    document.execCommand("copy");
}
document.getElementById("clean").addEventListener('click', cleanText);
function cleanText() {
    document.getElementById("textToEncode").value = "";
    document.getElementById("offset").value = "";
}
document.getElementById("restart").addEventListener('click', restartCipher);
function restartCipher() {
    document.getElementById("textResult").value = "";
    document.getElementById("textToEncode").value = "";
    document.getElementById("offset").value = "";
}