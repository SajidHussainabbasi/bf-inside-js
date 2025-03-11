'use strict';

console.log('-- begin --');

// determine if something is true about every entry in an array
//  this is similar to reducing, but more specific
//  you will always end up with true or false
// psst.  use the Debugger or JS Tutor
//  practice using breakpoints to skip to the lines you want to study

const _1_strings = ['char', 'boat', 'tree', 'boar'];

// is every entry 4 letters long?

const result = _1_strings.every((_1_strings) => _1_strings.length === 4);
console.log(result);

// does every string contain an "a"?
let _1_allHaveAnA = _1_strings.every((_1_strings) => _1_strings.includes('a'));
console.log(_1_allHaveAnA);

// are all entries true?
const _3_booleans = [true, true, true, true];
let _3_allTrue = _3_booleans.every((value) => value === true);
console.log(_3_allTrue);

// are all entries false?
const _4_booleans = [false, false, false, true];
let _4_allFalse = _4_booleans.every((value) => value === false);
console.log(_4_allFalse);

console.log('-- end --');
