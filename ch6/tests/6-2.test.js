import { rating, reportLines } from '../6-2.js';

describe('rating', () => {
  it('should get 2 points if the delayed delivery is more then 5 times', () => {
    const driver = { numberOfLateDeliveries: 6 };
    expect(rating(driver)).toBe(2);
  });
  it('should get 1 point if the delayed delivery is 5 or less times', () => {
    const driver = { numberOfLateDeliveries: 5 };
    expect(rating(driver)).toBe(1);
  });
});

describe('reportLines', () => {
  it('convert the name and location of customer data to array object format', () => {
    const customer = { name: 'lani', location: 'Seoul' };
    const results = reportLines(customer);
    expect(results.find((item) => item[0] === 'name')[1]).toBe(customer.name);
    expect(results.find((item) => item[0] === 'location')[1]).toBe(customer.location);
  });
});
