//단계 쪼개기 챌린지 1
export function priceOrder(product, quantity, shippingMethod) {
  const basePrice = calculateBasePrice(product, quantity);
  const discount = calculateDiscountedPrice(product, quantity);
  const shippingCost = calculateShippingCost(basePrice, shippingMethod, quantity);
  return basePrice - discount + shippingCost;
}

function calculateBasePrice(product, quantity) {
  return product.basePrice * quantity;
}

function calculateDiscountedPrice(product, quantity) {
  const { discountThreshold, basePrice, discountRate } = product;
  return Math.max(quantity - discountThreshold, 0) * basePrice * discountRate;
}

function calculateShippingCost(basePrice, shippingMethod, quantity) {
  const { discountThreshold, discountedFee, feePerCase } = shippingMethod;
  const shippingPerCase = basePrice > discountThreshold ? discountedFee : feePerCase;
  return quantity * shippingPerCase;
}

// 사용 예:
const product = {
  basePrice: 10,
  discountRate: 0.1,
  discountThreshold: 10,
};

const shippingMethod = {
  discountThreshold: 20,
  feePerCase: 5,
  discountedFee: 3,
};

const price = priceOrder(product, 5, shippingMethod);
console.log(price);
