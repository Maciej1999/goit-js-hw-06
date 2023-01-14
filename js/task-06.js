const input = document.querySelector("#validation-input");
const limit = Number.parseInt(input.getAttribute("data-length"));

input.addEventListener("blur", () => {
  if (input.value.length < limit) {
    input.className = "invalid";
    console.log(input.value, input.value.length);
  } else {
    input.className = "valid";
  }
});
