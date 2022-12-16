"use strict";

const name = document.querySelector("#name-output");

const nameInput = document.querySelector("#name-input");
const displayedName = document.querySelector("#name-output");

nameInput.addEventListener("input", (e) => {
  e.preventDefault();
  if (e.target.value === "") {
    displayedName.textContent = "Anonymous";
    return;
  }
  displayedName.textContent = e.target.value.trim();
});
