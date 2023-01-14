const form = document.querySelector(".login-form");
const email = form.email;
const password = form.password;
let data = { email, password };
const handleSubmit = (event) => {
  event.preventDefault();
};

form.addEventListener("submit", (event) => {
  handleSubmit(event);
  if (email.value === "" || password.value === "") {
    alert("All fields should be filled");
  } else {
    data.email = email.value;
    data.password = password.value;
    console.log(data);
    event.currentTarget.reset();
  }
});
