const minusButton = document.getElementById("minus-button");
const plusButton = document.getElementById("plus-button");
const quantityDisplay = document.getElementById("quantity-number");

let quantity = 1;

plusButton.addEventListener("click", function () {
  quantity++;
  quantityDisplay.textContent = quantity;
});

minusButton.addEventListener("click", function () {
  if (quantity > 1) {
    quantity--;
    quantityDisplay.textContent = quantity;
  }
});
