'use strict';

console.log('-- begin --');

let x = 0;

let y = x--;
// y takes the current value of x: y = 0
// then x is decremented: x = -1
console.assert(x === -1, 'Test 1 x');
console.assert(y === 0, 'Test 1 y');

x = y++;
// x takes the current value of y: x = 0
// then y is incremented: y = -1
console.assert(x === 0, 'Test 2 x');
console.assert(y === -1, 'Test 2 y');

let z = x++;
// z takes the current value of x: z = 0
// then x is incremented: x = 1
console.assert(x === 1, 'Test 3 x');
console.assert(y === -1, 'Test 3 y');
console.assert(z === 0, 'Test 3 z');

y = --z;
// z is decremented first: z = -1
// then y takes the new value of z: y = -1
console.assert(x === 1, 'Test 4 x');
console.assert(y === -1, 'Test 4 y');
console.assert(z === -1, 'Test 4 z');

console.log('-- end --');
