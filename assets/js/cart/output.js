const listProductsRef = document.querySelector(".list-products-js");

import refs from "./refs.js";
import cart from "./shopping-cart.js";

const getProducts = async () => {
  const response = await fetch("./products.json");
  const products = response.json();
  return products;
};
let numberData = 0;
let result = "";
getProducts().then((products) => {
  products.items.forEach((el) => {
    numberData += 1;
    result += `<li class="product">
          <div class="img-container">
            <img
              src="${el.img.url}"
              alt="product"
              class="product-img"
            />
            <button class="bag-btn" data-id="${numberData}">
              <i class="fas fa-shopping-cart"></i>
              Add to cart
            </button>
          </div>
          <h3>${el.name}</h3>
          <h4>${el.price} usd.</h4>
        </li>`;
  });
  listProductsRef.insertAdjacentHTML("beforeend", result);

  addedProductInCart(products);
});

//    divName.innerHTML = markup;
// console.log('вы добаили' + FindIdCurrentEl().name);

function addedProductInCart(products) {
  listProductsRef.addEventListener("click", (e) => {
    console.log("sddssds");
    if (e.target.nodeName !== "BUTTON") {
      return;
    }
    showNotification();
    const getDataAtrOnClick = () => e.target.attributes[1].value;
    const items = products.items;
    const FindIdCurrentEl = (getData) =>
      items.find((el) => {
        if (el.id === getData) {
          return el;
        }
      });
    cart.abb(FindIdCurrentEl(getDataAtrOnClick()));
    console.log(cart.totalPrice());

    renderProductInCartContent();
  });
}

function minusFromQuantity(e) {
  cart.getItems().find((el) => {
    if (el.id === e.target.dataset.id) {
      cart.minusResidue(el);
      refs.cartContent.innerHTML = refs.cartItem();
      if (el.quantity === 0) {
        removeItemFromCart(e);
      }
      renderProductInCartContent();
    }
  });
}

function plusToQuantity(e) {
  console.log(e.target.nextElementSibling);
  cart.getItems().find((el) => {
    if (el.id === e.target.dataset.id) {
      console.log(el);
      cart.abb(el);
      refs.cartContent.innerHTML = refs.cartItem();
      renderProductInCartContent();
    }
  });
}

function renderProductInCartContent() {
  const markupProductInCart = cart.items.reduce(
    (acc, el) =>
      acc +
      ` <div class="cart-item">
                    <img src="${el.img.url}" alt="${el.name}">
                    <div>
                        <h4>${el.name}</h4>
                        <h5>${el.price}</h5>
                        <span class="remove-item" data-id="${el.id}">Remove</span>
                    </div>
                    <div>
                        <i class="fas fa-chevron-up" data-id="${el.id}"></i>
                        <p class="item-amount">${el.quantity}</p>
                        <i class="fas fa-chevron-down" data-id="${el.id}"></i>
                    </div></div>`,
    ""
  );
  refs.cartContent.innerHTML = markupProductInCart;
  refs.cartTotal.innerHTML = `${cart.totalPrice()} usd.`;
  refs.clearCart.addEventListener("click", clearCart);
  // refs.removeItem.addEventListener('click', findIdCurrentEl)
  refs.cartItem().forEach((item) => {
    item.children[2].firstElementChild.addEventListener(
      "click",
      plusToQuantity
    );
  });
  refs.cartItem().forEach((item) => {
    item.children[2].lastElementChild.addEventListener(
      "click",
      minusFromQuantity
    );
  });

  refs.removeItem().forEach((el) => {
    el.addEventListener("click", removeItemFromCart);
  });

  refs.cartItemsCounter.textContent = summQuantity();
}

const summQuantity = () => {
  return cart.getItems().reduce((acc, el) => acc + el.quantity, 0);
};

function clearCart() {
  cart.clear();
  renderProductInCartContent();
}

function removeItemFromCart(e) {
  cart.remove(e.target.dataset.id);
  renderProductInCartContent();
}

const NOTIFICATION_DELAY = 3000;
let timeoutId = null;
// const refs = {
//   notification: document.querySelector('.js-alert'),
// };

refs.notification.addEventListener("click", onNotificationClick);

/*
 * Функции
 */
function onNotificationClick() {
  hideNotification();
  clearTimeout(timeoutId);
}

function showNotification() {
  refs.notification.classList.add("is-visible");

  timeoutId = setTimeout(() => {
    console.log("Закрываем алерт автоматически чтобы не висел");
    hideNotification();
  }, NOTIFICATION_DELAY);
}

function hideNotification() {
  refs.notification.classList.remove("is-visible");
}
