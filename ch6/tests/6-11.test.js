import { priceOrder } from '../6-11.js';

describe('priceOrder', () => {
  it('should return the calculated price', () => {
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

    expect(priceOrder(product, 5, shippingMethod)).toBe(65);
  });
});
