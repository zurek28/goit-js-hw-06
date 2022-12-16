// "use strict";

const validInput = document.querySelector("#validation-input");

validInput.addEventListener("blur", (e) => {
  const reqLength = Number(e.target.dataset.length);
  if (e.target.value.length === reqLength) {
    validInput.classList.add("valid");
    validInput.classList.remove("invalid");
  } else {
    validInput.classList.add("invalid");
    validInput.classList.remove("valid");
  }
});
