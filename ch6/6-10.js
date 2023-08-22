//여러 함수를 변환 함수로 묶기
import _ from 'lodash';

const reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 };

export function acquireReading() {
  return reading;
}

function baseRate(month, year) {
  if (year === 2017 && month === 5) return 0.1;
  return 0.2;
}

function calculateBaseCharge(reading) {
  return baseRate(reading.month, reading.year) * reading.quantity;
}

export function enrichReading(original) {
  const result = _.cloneDeep(original); //깊은복사
  result.baseCharge = calculateBaseCharge(result);
  result.taxThreshold = 0.1;
  result.taxableCharge = Math.max(0, result.baseCharge - result.taxThreshold);
  return result;
}
