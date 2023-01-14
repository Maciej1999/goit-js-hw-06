const nameIn = document.querySelector("#name-input");
const nameOut = document.querySelector("#name-output");
const def = nameOut.textContent;
nameIn.addEventListener("keyup", () => {
  if (nameIn.value === "") {
    nameOut.textContent = def;
    return;
  } else {
    nameOut.textContent = nameIn.value;
  }
});
