//기본형을 객체로 바꾸기
{
  class Order {
    constructor(priority) {
      this.priority = priority;
    }
    isHighPriority() {
      return this.priority.higherThan(new Priority('normal'));
    }
  }

  class Priority {
    #value;
    constructor(value) {
      if (!Priority.legalValues().includes(value)) {
        throw new Error(`${value} is invalid for Priority`);
      }
      this.#value = value;
    }
    get index() {
      return Priority.legalValues().indexOf(this.#value);
    }
    equals(other) {
      return this.index === other.index;
    }
    higherThan(other) {
      return this.index > other.index;
    }
    static legalValues() {
      return ['low', 'normal', 'high', 'rush'];
    }
  }

  const orders = [
    new Order(new Priority('normal')), //
    new Order(new Priority('high')),
    new Order(new Priority('rush')),
  ];
  const highPriorityCount = orders.filter((o) => o.isHighPriority()).length;
  console.log(highPriorityCount);
}
