'use strict';

/* math

  some simple(ish) math expressions

  hint: if you highlight a line, only that line will be traced

*/

const a = 3 * 2 + 1; // 6 + 1 = 7
console.assert(a === 7, 'a');

const b = 3 * (2 + 1); // 3 * 3 = 9
console.assert(b === 9, 'b');

const c = 4 / 2 - 1; // 2 - 1 = 1
console.assert(c === 1, 'c');

const d = 4 / (2 - 1); // 4 / 1 = 4
console.assert(d === 4, 'd');

const e = 1 + -2 * 3; // 1 + (-6) = -5
console.assert(e === -5, 'e');

const f = (1 + -2) * 3; // (-1) * 3 = -3
console.assert(f === -3, 'f');

const h = (4 % 2) + 3; // 0 + 3 = 3
console.assert(h === 3, 'h');

const i = 4 % (2 + 3); // 4 % 5 = 4 (since 4 is less than 5, remainder is 4)
console.assert(i === 4, 'i');

// --- beware of NaN! ---
//  remember implicit coercion?

const x = 1 * 'two' * 3; // 'two' is not a number → NaN * 3 = NaN
console.assert(Object.is(x, NaN), 'x');

const y = 3 + undefined - 3; // undefined leads to NaN → NaN - 3 = NaN
console.assert(Object.is(y, NaN), 'y');

const z = (2 - 2) / 0; // 0 / 0 is an indeterminate form → NaN
console.assert(Object.is(z, NaN), 'z');