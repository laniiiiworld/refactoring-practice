//여러 함수를 변환 함수로 묶기
import { acquireReading, enrichReading } from './6-10.js';

const rawReading = acquireReading();
const reading = enrichReading(rawReading);
console.log(reading.baseCharge);
console.log(reading.taxableCharge);
