const mainImage = document.getElementById("main_image");
const smallImage = document.getElementsByClassName("small_image");
smallImage[0].onclick = () => {
  mainImage.src = smallImage[0].src;
};
smallImage[1].onclick = () => {
  mainImage.src = smallImage[1].src;
};
smallImage[2].onclick = () => {
  mainImage.src = smallImage[2].src;
};
smallImage[3].onclick = () => {
  mainImage.src = smallImage[3].src;
};
const shoppingCart = document.getElementById("shopping_cart");
const cartIcon = document.getElementById("cart_icon");

cartIcon.onclick = () => {
  shoppingCart.classList.remove("hidden");
};
const closeCart = () => {
  shoppingCart.classList.add("hidden");
};

let cart = [];
let total = 0;
const addToCart = (button) => {
  const productDiv = button.closest(".product");

  const name = productDiv
    .querySelector("[data-name]")
    .getAttribute("data-name");
  const brand = productDiv
    .querySelector("[data-brand]")
    .getAttribute("data-brand");
  const price = productDiv
    .querySelector("[data-price]")
    .getAttribute("data-price");

  const isInCart = cart.some(
    (item) => item.name === name && item.brand === brand
  );

  if (isInCart) {
    alert(`${name} is already in your cart!`);
    return;
  }

  cart.push({ name, brand, price });

  document.getElementById("cart_count").textContent = cart.length;

  alert(`${name} has been added to your cart!`);
  itemDisplay(name, brand, price);
};

const itemDisplay = (name, brand, price) => {
  console.log(name, brand, price);

  const cartItemDiv = document.getElementById("cart_items");
  cartItemDiv.innerHTML = "";
  total = 0;

  const li = document.createElement("li");

  li.innerHTML = `
   <h2>Name: ${name}</h2>
   <h2>Brand: ${brand}</h2>
   <h2>Price: ${price}</h2>
  `;
  cartItemDiv.appendChild(li);

  total += price;

  document.getElementById("total_price").textContent = total;
};
