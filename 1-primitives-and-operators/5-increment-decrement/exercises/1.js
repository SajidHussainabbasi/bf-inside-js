'use strict';

console.log('-- begin --');

let x = 0;

let y = ++x;
// x is incremented first: x = 1
// y takes the new value of x → y = 1
console.assert(x === 1, 'Test 1 x');
console.assert(y === 1, 'Test 1 y');

x = y--;
// x is assigned the current value of y: x = 1
// then y is decremented: y = 0
console.assert(x === 1, 'Test 2 x');
console.assert(y === 0, 'Test 2 y');

let z = x++;
// z takes the current value of x: z = 1
// then x is incremented: x = 2
console.assert(x === 2, 'Test 3 x');
console.assert(y === 0, 'Test 3 y');
console.assert(z === 1, 'Test 3 z');

y = --x;
// x is decremented first: x = 1
// y takes the new value of x → y = 1
console.assert(x === 1, 'Test 4 x');
console.assert(y === 1, 'Test 4 y');
console.assert(z === 1, 'Test 4 z');

console.log('-- end --');
