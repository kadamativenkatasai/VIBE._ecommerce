const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  abb(product) {
    for (const item of this.items) {
      if (product.id == item.id) {
        return (item.quantity += 1);
      }
    }

    product.quantity = 1;
    this.items.push(product);
  },
  minusResidue(prod) {
    for (const item of this.items) {
      if (prod.id == item.id) {
        item.quantity -= 1;
      }
    }
  },
  remove(productName) {
    console.log(`erroro ${productName}`);

    for (let i = 0; i < this.items.length; i += 1) {
      if (productName == this.items[i].id) {
        this.items.splice(i, 1);
      }
    }
  },
  clear() {
    this.items.splice(0);
  },
  totalPrice() {
    let totalPrice = 0;
    for (const item of this.items) {
      totalPrice += item.price * item.quantity;
    }
    return totalPrice;
  },
};

// export default cart;
