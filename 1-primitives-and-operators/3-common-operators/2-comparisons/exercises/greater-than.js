'use strict';

console.log('-- begin --');

// a > b
// if both args are strings, compare the unicode characters
// otherwise convert both values to Number and compare as numbers

// fill in the blanks to pass the assertions
//  there may be more than one correct answer!

const _1_expect = false; // '1' is converted to a number (1), so 1 > 1 is false
const _1_native = '1' > 1;
console.assert(_1_expect === _1_native, 'Test 1');

const _2_expect = false; // undefined is converted to NaN, and NaN compared to anything is always false
const _2_native = undefined > null;
console.assert(_2_expect === _2_native, 'Test 2');

const _3_expect = false; // null is converted to 0, and -1 > 0 is false
const _3_native = -1 > null;
console.assert(_3_expect === _3_native, 'Test 3');

const _4_expect = true; // true is converted to 1, false is converted to 0, so 1 > 0 is true
const _4_native = true > false;
console.assert(_4_expect === _4_native, 'Test 4');

const _5_expect = false; // false is 0, true is 1, and 0 > 1 is false
const _5_native = false > true;
console.assert(_5_expect === _5_native, 'Test 5');

const _6_expect = true; // '13' is converted to a number (13), and 13 > 1 is true
const _6_native = '13' > true;
console.assert(_6_expect === _6_native, 'Test 6');

const _7_expect = false; // 'aa' and 'ab' are compared lexicographically, and 'aa' < 'ab'
const _7_native = 'aa' > 'ab';
console.assert(_7_expect === _7_native, 'Test 7');

const _8_expect = true; // 'bc' and 'ab' are compared lexicographically, and 'bc' > 'ab'
const _8_native = 'bc' > 'ab';
console.assert(_8_expect === _8_native, 'Test 8');

const _9_expect = false; // 'ab' is not a valid number, so it converts to NaN, and any comparison with NaN is false
const _9_native = 0 > 'ab';
console.assert(_9_expect === _9_native, 'Test 9');

console.log('-- end --');
