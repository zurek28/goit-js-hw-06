"use strict";

let counterValue = 0;

const counter = document.querySelector("#value");
const incrementBtn = document.querySelector("button[data-action='increment']");
const decrementBtn = document.querySelector("button[data-action='decrement']");

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  counter.textContent = counterValue;
});

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  counter.textContent = counterValue;
});
