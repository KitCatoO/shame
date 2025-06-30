document.addEventListener("DOMContentLoaded", function () {
  const minusButton = document.querySelector('button-minus');
  const plusButton = document.querySelector('button-plus');
  const inputField = document.querySelector('quantity-field');

  minusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(inputField.value) || 0;
    inputField.value = currentValue - 1;
  });

  plusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(inputField.value) || 0;
    inputField.value = currentValue + 1;
  });
});
