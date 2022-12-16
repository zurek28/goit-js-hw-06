"use strict";

const slider = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

slider.addEventListener("input", (e) => {
  text.style.fontSize = e.target.valueAsNumber.toString() + "px";
});
