import cipher from "../../cipher.js";

const encodeButton = document.querySelector("#button-encode");
const decodeButton = document.querySelector("#button-decode");
const copyButton = document.querySelector("#button-copy");
const cleanButton = document.querySelector("#button-clean");
const offsetNumber = document.querySelector("#offset");
const initialMessage = document.querySelector("#message");
const finalMessage = document.querySelector("#final-message");

encodeButton.addEventListener("click", (e) => {
  printMessageCoded(e);
});

decodeButton.addEventListener("click", (e) => {
  printMessageDecoded(e);
});

copyButton.addEventListener("click", copyFinalMessage);
cleanButton.addEventListener("click", cleanFinalMessage);

function printMessageCoded(e) {
  e.preventDefault();
  const encodedMessage = cipher.encode(
    Number(offsetNumber.value),
    initialMessage.value.toUpperCase()
  );
  document.querySelector("#final-message").innerText = encodedMessage;
}

function printMessageDecoded(e) {
  e.preventDefault();
  const decodedMessage = cipher.decode(
    Number(offsetNumber.value),
    initialMessage.value.toUpperCase()
  );
  document.querySelector("#final-message").innerText = decodedMessage;
}

function copyFinalMessage() {
  finalMessage.select();
  document.execCommand("#copy");
  document.querySelector("#button-copy").innerHTML = "COPIED";
}

function cleanFinalMessage() {
  document.querySelector("#message").value = "";
  document.querySelector("#offset").value = "";
  document.querySelector("#final-message").innerHTML = "";
}
