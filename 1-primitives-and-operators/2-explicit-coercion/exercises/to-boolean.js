'use strict';

console.log('-- begin --');

console.assert(Boolean(undefined) === false, 'Test 1'); // undefined is falsy

console.assert(Boolean(null) === false, 'Test 2'); // null is falsy

console.assert(Boolean(-1) === true, 'Test 3'); // any nonzero number is truthy

console.assert(Boolean(0) === false, 'Test 4'); // 0 is falsy

console.assert(Boolean(1) === true, 'Test 5'); // any nonzero number is truthy

console.assert(Boolean('-1') === true, 'Test 6'); // non-empty string is truthy

console.assert(Boolean('0') === true, 'Test 7'); // non-empty string is truthy

console.assert(Boolean('') === false, 'Test 8'); // empty string is falsy

console.assert(Boolean(NaN) === false, 'Test 9'); // NaN is falsy

console.log('-- end --');
