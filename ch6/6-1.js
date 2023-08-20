//함수 추출하기
export function printOwing(invoice, console, clock) {
  printBanner(console);
  const outstanding = calculateOutstanding(invoice.orders);
  recordDueDate(clock, invoice);
  printDetails(invoice, outstanding, console);
}

function printBanner(console) {
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');
}

function calculateOutstanding(orders) {
  return orders.reduce((acc, order) => (acc += order.amount), 0);
}

function recordDueDate(clock, invoice) {
  const today = clock.today;
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

function printDetails(invoice, outstanding, console) {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: '엘리',
};
class Clock {
  constructor() {}
  get today() {
    return new Date();
  }
}
printOwing(invoice, console, new Clock());
