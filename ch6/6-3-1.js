//변수 추출하기 예제 1
export function price(order) {
  const { quantity, itemPrice } = order;
  const basePrice = quantity * itemPrice;
  const quantityDiscount = Math.max(0, quantity - 500) * itemPrice * 0.05;
  const shipping = Math.min(quantity * itemPrice * 0.1, 100);
  return basePrice - quantityDiscount + shipping;
}
