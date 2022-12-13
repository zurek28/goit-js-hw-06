"use strict";

const slider = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

slider.addEventListener("click", (e) => {
  const fontSize = e.target.valueAsNumber;
  const strFontSize = fontSize.toString();
  text.style.fontSize = strFontSize + "px";
});
