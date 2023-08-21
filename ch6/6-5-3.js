//함수 선언 바꾸기 예제 3
//함수의 매개변수는 필요한 것만 받아오기!
//외부 객체의 의존도를 낮추고, 함수의 재사용성을 높일 수 있다.
export function inNewEngland(state) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'] //
    .includes(state);
}
