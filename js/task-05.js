"use strict";

const name = document.querySelector("#name-output");

const nameInput = document.querySelector("#name-input");
const displayedName = document.querySelector("#name-output");

nameInput.addEventListener("submit", (e) => {
  e.preventDefault();
  if (e.target[0].value === "") {
    displayedName.textContent = "Anonymous";
    return;
  }
  displayedName.textContent = e.target[0].value;
});
