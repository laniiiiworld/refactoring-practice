//임시 변수를 질의 함수로 바꾸기
class Order {
  #quantity;
  #item;
  constructor(quantity, item) {
    this.#quantity = quantity;
    this.#item = item;
  }

  get basePrice() {
    return this.#quantity * this.#item.price;
  }
  get discountFactor() {
    const value = 0.98;
    return this.basePrice > 1000 ? value - 0.03 : value;
  }
  get price() {
    return this.basePrice * this.discountFactor;
  }
}
