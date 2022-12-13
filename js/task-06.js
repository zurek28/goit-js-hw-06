// "use strict";

const validInput = document.querySelector("#validation-input");

// validInput.addEventListener("submit", (e) => {
//   e.preventDefault();
// });

validInput.addEventListener("blur", (e) => {
  //   console.log(e.target.value);
  const reqLength = Number(e.target.dataset.length);
  if (e.target.value.length === reqLength) {
    validInput.classList.add("valid");
  } else {
    validInput.classList.add("invalid");
  }
});
