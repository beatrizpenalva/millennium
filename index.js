import cipher from "./cipher.js";
const errorOffset = "Please, type a number."
const errorText = "Please, type a text."

function getOffset() {
    const offset = Number(document.getElementById("offset").value);
    if (offset !== 0 && offset !== null) {
        return offset;
    } else {
        return console.log(errorOffset);
    }
}
function getText() {
    const messageToEncode = document.getElementById("message").value.toUpperCase();
    if (messageToEncode !== "" && messageToEncode !== 0) {
        return messageToEncode;
    } else {
        return console.log(errorText);
    }
}

const offset = getOffset();
const messageToEncode = getText();

document.getElementById("button-encode").addEventListener("click", printTextCoded);
function printTextCoded() {
    const encodedMessage = cipher.encode(offset, messageToEncode);
    document.getElementById("final-message").innerText = encodedMessage;
}

document.getElementById("button-decode").addEventListener("click", getAndPrintTextDecoded);
function getAndPrintTextDecoded() {
    const decodedMessage = cipher.decode(offset, messageToEncode);
    document.getElementById("final-message").innerText = decodedMessage;
}

document.getElementById("button-copy").addEventListener("click", copyTextResult);
function copyTextResult() {
    document.getElementById("final-message").select();
    document.execCommand("copy");
    document.getElementById("button-copy").innerHTML = "COPIED";
}

document.getElementById("button-clean").addEventListener("click", cleanText);
function cleanText() {
    document.getElementById("message").value = "";
    document.getElementById("offset").value = "";
    document.getElementById("final-message").innerHTML = "";
}