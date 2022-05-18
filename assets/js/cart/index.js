import "./render.js";
import refs from "./refs.js";

refs.cartBtn.addEventListener("click", onHandleShowCart);
refs.closeCart.addEventListener("click", onHandlecloseCart);

function onHandleShowCart() {
  refs.cart.classList.add("showCart");
  refs.cartOverlay.classList.add("transparentBcg");
}

function onHandlecloseCart() {
  refs.cart.classList.remove("showCart");
  refs.cartOverlay.classList.remove("transparentBcg");
}

/* ИНФО карта */

refs.openMenuInfo.addEventListener("click", onHandleShowInfo);
refs.closeMenuInfo.addEventListener("click", onHandlecloseInfo);

function onHandleShowInfo() {
  refs.infoMenu.classList.add("showInfo");
  refs.infoOverlay.classList.add("transparentInfo");
}
function onHandlecloseInfo() {
  refs.infoMenu.classList.remove("showInfo");
  refs.infoOverlay.classList.remove("transparentInfo");
}

refs.linkInfoShop.addEventListener("click", (e) => {
  if (e) {
    onHandlecloseInfo();
  }
});
