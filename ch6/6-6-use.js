//변수 캡슐화하기
import { getDefaultOwner } from './6-6.js';

const owner = getDefaultOwner();
// owner.firstName = '엘리';
console.log(owner.firstName);
console.log(getDefaultOwner());
