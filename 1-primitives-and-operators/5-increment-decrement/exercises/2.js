'use strict';

console.log('-- begin --');

let x = 0;

let y = x--;
// y takes the current value of x: y = 0
// then x is decremented: x = -1
console.assert(x === -1, 'Test 1 x');
console.assert(y === 0, 'Test 1 y');

x = ++y;
// y is incremented first: y = 1
// then x takes the new value of y: x = 1
console.assert(x === 1, 'Test 2 x');
console.assert(y === 1, 'Test 2 y');

let z = y++;
// z takes the current value of y: z = 1
// then y is incremented: y = 2
console.assert(x === 1, 'Test 3 x');
console.assert(y === 2, 'Test 3 y');
console.assert(z === 1, 'Test 3 z');

x = --z;
// z is decremented first: z = 0
// then x takes the new value of z: x = 0
console.assert(x === 0, 'Test 4 x');
console.assert(y === 2, 'Test 4 y');
console.assert(z === 0, 'Test 4 z');

console.log('-- end --');
