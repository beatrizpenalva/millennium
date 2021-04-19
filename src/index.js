import cipher from "../../cipher.js";

const getEncryptOptions = document.getElementsByName("method");
const offsetNumber = document.querySelector("#offset");
const initialMessage = document.querySelector("#message");
const finalMessage = document.querySelector("#final-message");
const copyButton = document.querySelector("#button-copy");
const cleanButton = document.querySelector("#button-clean");
const countCaracteres = document.querySelector("#count-caracteres");

copyButton.addEventListener("click", copyFinalMessage);
cleanButton.addEventListener("click", cleanFinalMessage);
initialMessage.addEventListener("input", (e) => {
  e.preventDefault();
  countCaracteres.innerText = initialMessage.value.length;
  encryptMessage();
});

function encryptMessage() {
  const messageEncrypted = cipher.encrypt(
    Math.abs(Number(offsetNumber.value)),
    initialMessage.value,
    getEncryptOptions[0].checked ? "encode" : "decode"
  );
  printMessage(messageEncrypted);
}

function printMessage(messageEncrypted) {
  document.querySelector("#final-message").innerText = messageEncrypted;
}

function copyFinalMessage() {
  finalMessage.select();
  document.execCommand("copy");
  document.querySelector("#button-copy").innerHTML = "COPIED";
}

function cleanFinalMessage() {
  document.querySelector("#message").value = "";
  document.querySelector("#offset").value = "";
  document.querySelector("#final-message").innerHTML = "";
}
