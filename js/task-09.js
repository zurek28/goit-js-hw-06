"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorBtn = document.querySelector(".change-color");
const body = document.querySelector("body");
const colorDisplay = document.querySelector(".color");

colorBtn.addEventListener("click", () => {
  const color = getRandomHexColor();
  colorDisplay.textContent = color;
  body.style.backgroundColor = color;
});
