const minusButton = document.getElementById("minus-button");
const plusButton = document.getElementById("plus-button");
const quantityDisplay = document.getElementById("quantity-number");
const addCartButton = document.getElementById("add-cart-button");

let quantity = 1;

if (plusButton && minusButton && quantityDisplay) {
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
}

if (addCartButton) {
  addCartButton.addEventListener("click", function () {
    localStorage.setItem("productImage", "img/skateboard 2.jpg");
    localStorage.setItem("productName", "Blue skate deck");
    localStorage.setItem("productPrice", "89.99");
    localStorage.setItem("productQuantity", quantity);
  });
}

//Cart page
const cartItem = document.getElementById("cart-item");
const removeButton = document.getElementById("remove-button");

if (cartItem) {
  const image = localStorage.getItem("productImage");
  const name = localStorage.getItem("productName");
  const price = localStorage.getItem("productPrice");
  const savedQuantity = localStorage.getItem("productQuantity");

  if (name && price && savedQuantity) {
    cartItem.innerHTML = `
    <img src="${image}" alt="${name}">
    <h3 class="product-name">${name}</h3>
    <p class="product-price">€${price}</p>
    <p>Quantity: ${savedQuantity}</p>
    `;
  } else {
    cartItem.innerHTML = "<p>Your cart is empty.</p>";
  }
}

if (removeButton) {
  removeButton.addEventListener("click", function () {
    localStorage.removeItem("productName");
    localStorage.removeItem("productPrice");
    localStorage.removeItem("productQuantity");

    location.reload();
  });
}
