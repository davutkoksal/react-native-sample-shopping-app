class CartItem {
  constructor(quantity, productTitle, productPrice, productImageUrl, sum, id) {
    this.quantity = quantity;
    this.productTitle = productTitle;
    this.productImageUrl = productImageUrl;
    this.productPrice = productPrice;
    this.sum = sum;
    this.id = id;
  }
}

export default CartItem;
