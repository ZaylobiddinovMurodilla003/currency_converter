"use script";

let elForm = document.querySelector(".form");
let elInput = document.querySelector(".input");
let elSelect = document.querySelector(".select");
let elResult = document.querySelector(".result");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let InputValue = +elInput.value;
  let SelectValue = +elSelect.value;
  let ConvertCash = InputValue / SelectValue;

  if (SelectValue == 12273) {
    elResult.textContent = "$" + ConvertCash.toFixed(3);
  } else if (SelectValue == 12988) {
    elResult.textContent = "€" + ConvertCash.toFixed(3);
  } else if (SelectValue == 127) {
    elResult.textContent = "₽" + ConvertCash.toFixed(3);
  } else if (SelectValue == 1679) {
    elResult.textContent = "¥" + ConvertCash.toFixed(3);
  } else if (SelectValue == 450) {
    elResult.textContent = ConvertCash.toFixed(3) + "tl";
  }
});
