'use strict';

/* && and ||

  short circuiting!  don't forget it

  it's possible to get the same result different ways

  hint: if you highlight a line, only that line will be traced

*/

// --- booleans ---

const a = true || (false && true); // true || false = true
console.assert(a === true, 'a');

const b = (true || false) && true; // true && true = true
console.assert(b === true, 'b');

const c = true && (false || false) && true; // true && false && true = false
console.assert(c === false, 'c');

const d = true || (false && false) || true; // true || false || true = true
console.assert(d === true, 'd');

const e = (true || false) && (false || true); // true && true = true
console.assert(e === true, 'e');

// --- numbers ---

const f = 1 || (0 && 2); // 1 || (0) = 1
console.assert(f === 1, 'f');

const g = (1 || 0) && 2; // 1 && 2 = 2
console.assert(g === 2, 'g');

const h = 1 && (0 || 0) && 2; // 1 && 0 && 2 = 0
console.assert(h === 0, 'h');

const i = 1 || (0 && 0) || 2; // 1 || 0 || 2 = 1
console.assert(i === 1, 'i');

const j = (1 || 0) && (0 || 2); // 1 && 2 = 2
console.assert(j === 2, 'j');

// --- strings ---

const k = 'hi' || ('' && 'bye'); // 'hi' || '' = 'hi'
console.assert(k === 'hi', 'k');

const l = ('hi' || '') && 'bye'; // 'hi' && 'bye' = 'bye'
console.assert(l === 'bye', 'l');

const m = 'hi' && ('' || '') && 'bye'; // 'hi' && '' && 'bye' = ''
console.assert(m === '', 'm');

const n = 'hi' || ('' && '') || 'bye'; // 'hi' || '' || 'bye' = 'hi'
console.assert(n === 'hi', 'n');

const o = ('hi' || '') && ('' || 'bye'); // 'hi' && 'bye' = 'bye'
console.assert(o === 'bye', 'o');
