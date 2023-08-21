//함수 선언 바꾸기 예제 2
export default class Book {
  #reservations;
  constructor() {
    this.#reservations = [];
  }
  //빠른 예약 기능이 추가된 경우 코드 개선 가능한 방법 (추천하지 않는 방식🙁)
  addReservation(customer, isPriority = false) {
    this.#reservations.push(customer);
  }

  hasReservation(customer) {
    return this.#reservations.some((reservedCustomer) => reservedCustomer.id === customer.id);
  }
}
