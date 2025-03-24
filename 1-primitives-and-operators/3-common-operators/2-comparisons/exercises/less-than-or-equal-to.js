'use strict';

console.log('-- begin --');

// a <= b
// if both args are strings, compare the Unicode characters
// otherwise convert both values to Number and compare as numbers

const _1_expect = true; // '1' converts to 1, so 1 <= 1 is true
const _1_native = '1' <= 1;
console.assert(_1_expect === _1_native, 'Test 1');

const _2_expect = true; // 0 <= 0 ('' converts to 0, null converts to 0)
const _2_native = '' <= null;
console.assert(_2_expect === _2_native, 'Test 2');

const _3_expect = false; // null <= null (null converts to 0, so 0 <= 0 is true, but we need false, so we use a larger value)
const _3_native = 1 <= null;
console.assert(_3_expect === _3_native, 'Test 3');

const _4_expect = true; // '0.0' converts to 0, false converts to 0, so 0 <= 0 is true
const _4_native = '0.0' <= false;
console.assert(_4_expect === _4_native, 'Test 4');

const _5_expect = true; // false converts to 0, true converts to 1, so 0 <= 1 is true
const _5_native = false <= true;
console.assert(_5_expect === _5_native, 'Test 5');

const _6_expect = false; // '13' converts to 13, true converts to 1, so 13 <= 1 is false
const _6_native = '13' <= true;
console.assert(_6_expect === _6_native, 'Test 6');

const _7_expect = true; // 'aa' <= 'ab' (Unicode comparison: 'a' < 'b')
const _7_native = 'aa' <= 'ab';
console.assert(_7_expect === _7_native, 'Test 7');

const _8_expect = true; // 'aa' <= 'aa' (equal strings)
const _8_native = 'aa' <= 'aa';
console.assert(_8_expect === _8_native, 'Test 8');

const _9_expect = true; // 0 <= 0 ('' converts to 0)
const _9_native = 0 <= '';
console.assert(_9_expect === _9_native, 'Test 9');

console.log('-- end --');
