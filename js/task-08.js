"use strict";

const loginForm = document.querySelector(".login-form");
const emailInput = document.querySelector("input[name='email']");
const passInput = document.querySelector("input[name='password']");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (emailInput.value === "" || passInput.value === "") {
    return alert("Uzupełnij email i hasło!");
  }

  console.log(
    `{${email.name}: ${email.value}, ${password.name}: ${password.value}}`
  );
  event.currentTarget.reset();
});
