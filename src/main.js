import cipher from "./cipher.js";

const getEncryptOptions = document.getElementsByName("method");
const initialMessage = document.querySelector("#message");
const finalMessage = document.querySelector("#final-message");
const copyButton = document.querySelector("#button-copy");
const cleanButton = document.querySelector("#button-clean");
const countCaracteres = document.querySelector("#count-caracteres");
const getOffsetNumber = localStorage.getItem("offsetNumber");
const encodeButton = document.querySelector("#encode");
const decodeButton = document.querySelector("#decode");

encodeButton.addEventListener("change", encryptMessage);
decodeButton.addEventListener("change", encryptMessage);
initialMessage.addEventListener("input", encryptMessage);
copyButton.addEventListener("click", copyFinalMessage);
cleanButton.addEventListener("click", cleanFinalMessage);

function encryptMessage() {
  countCaracteres.innerText = initialMessage.value.length;

  const messageEncrypted = cipher.encrypt(
    Math.abs(Number(getOffsetNumber)),
    initialMessage.value,
    getEncryptOptions[0].checked ? "encode" : "decode"
  );

  printMessage(messageEncrypted);
}

function printMessage(messageEncrypted) {
  document.querySelector("#final-message").innerText = "";
  document.querySelector("#final-message").innerText = messageEncrypted;
}

function copyFinalMessage() {
  finalMessage.select();
  document.execCommand("copy");
  document.querySelector("#button-copy").innerHTML = "COPIED";
  setTimeout(function () {
    document.querySelector("#button-copy").innerHTML = "COPY";
  }, 1000);
}

function cleanFinalMessage() {
  document.querySelector("#message").value = "";
  document.querySelector("#final-message").innerHTML = "";
}
