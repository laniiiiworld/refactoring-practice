//여러 함수를 클래스로 묶기
import { acquireReading } from './6-9.js';

const reading = acquireReading();
const taxableCharge = reading.taxableCharge;
console.log(taxableCharge);
