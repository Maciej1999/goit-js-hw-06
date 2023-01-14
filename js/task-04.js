const buttons = document.querySelectorAll("button");
const increment = buttons[1];
const decrement = buttons[0];
let valueBox = document.querySelector("#value");
let counterValue = Number.parseInt(
  document.querySelector("#value").textContent
);

increment.addEventListener("click", () => {
  counterValue += 1;
  valueBox.textContent = counterValue;
});
decrement.addEventListener("click", () => {
  counterValue -= 1;
  valueBox.textContent = counterValue;
});
