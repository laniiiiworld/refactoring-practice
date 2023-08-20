// 함수 인라인하기
// 예제 1
export function rating(driver) {
  return driver.numberOfLateDeliveries > 5 ? 2 : 1;
}

// 예제 2
export function reportLines(customer) {
  return [
    ['name', customer.name],
    ['location', customer.location],
  ];
}
