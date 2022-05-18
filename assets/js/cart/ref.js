const refs = {
  product() {
    return document.querySelector(".product");
  },
  chevronUp() {
    const shevronsUp = document.querySelector(".fa-chevron-up");
    return shevronsUp;
  },
  cartItem() {
    return document.querySelectorAll(".cart-item");
  },
  cartBtn: document.querySelector(".cart-btn"),
  cartOverlay: document.querySelector(".cart-overlay"),

  openMenuInfo: document.querySelector(".nav-icon"),
  closeMenuInfo: document.querySelector(".close-menu-info"),
  infoOverlay: document.querySelector(".info-overlay"),
  infoMenu: document.querySelector(".info-menu"),
  linkInfoShop: document.querySelector(".link-info-shop-js"),

  cart: document.querySelector(".cart"),
  closeCart: document.querySelector(".close-cart"),
  cartTotal: document.querySelector(".cart-total"),
  cartContent: document.querySelector(".cart-content"),
  clearCart: document.querySelector(".clear-cart"),
  removeItem() {
    return document.querySelectorAll(".remove-item");
  },
  cartItemsCounter: document.querySelector(".cart-items"),
  notification: document.querySelector(".js-alert"),
};

export default refs;
