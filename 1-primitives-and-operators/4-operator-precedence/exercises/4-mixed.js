'use strict';

/* everything mixed together

  these expressions are strange things to practice tracing
  you won't come across things like this too often
  and you shouldn't be writing them either!

*/

const w = 'HELLO';
const x = true;
const y = 4;
const z = -4;

// ---

const a = typeof typeof x === typeof w;
// typeof x is 'boolean', typeof 'boolean' is 'string', typeof w is 'string'
// 'string' === 'string' → true
console.assert(a === true, 'a');

const b = w.length >= y + 1;
// 'HELLO'.length (5) >= 4 + 1 (5) → true
console.assert(b === true, 'b');

const c = y + z === w[4];
// 4 + (-4) = 0, w[4] = 'O', 'O' is not a number → false
console.assert(c === false, 'c');

const d = y + z || x;
// 4 + (-4) = 0, 0 is falsy, so it returns x (true)
console.assert(d === true, 'd');

const e = x === (w.slice(1, 5).length === y);
// w.slice(1,5) → 'ELLO' (length 4), 4 === 4 → true
// true === true → true
console.assert(e === true, 'e');
