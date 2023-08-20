import { printOwing } from '../6-1.js';

class Console {
  #content = '';
  constructor() {}
  log(message) {
    this.#content += `${message}\n`;
  }
  get content() {
    return this.#content;
  }
}
class Clock {
  constructor() {}
  get today() {
    return {
      getFullYear() {
        return 2023;
      },
      getMonth() {
        return 7;
      },
      getDate() {
        return 1;
      },
    };
  }
}
describe('printOwing', () => {
  it('should print owing', () => {
    const invoice = {
      orders: [{ amount: 2 }, { amount: 5 }],
      customer: '엘리',
    };
    const console = new Console();
    const expected =
      '***********************\n' +
      '**** Customer Owes ****\n' +
      '***********************\n' +
      'name: 엘리\n' +
      'amount: 7\n' +
      'due: 2023. 8. 31.\n';
    printOwing(invoice, console, new Clock());
    expect(console.content).toBe(expected);
  });
});
