'use strict';

console.log('-- begin --');

// try different values and different types
const a = 1500;
console.log(a);

let isBigNumber;
if (typeof a === 'number') {
  isBigNumber = a > 1000;
} else {
  isBigNumber = false;
}

console.log(isBigNumber);

console.log('-- end --');
