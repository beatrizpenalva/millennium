const offsetNumber = document.querySelector("#offset");

offsetNumber.addEventListener("input", (e) => {
  e.preventDefault();
  localStorage.setItem("offsetNumber", offsetNumber.value);
});