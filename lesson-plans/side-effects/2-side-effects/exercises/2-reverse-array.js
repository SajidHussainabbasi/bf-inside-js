'use strict';

// prettier-ignore
const deepCompare = (actual, expect) => actual === expect || Object.is(actual, expect) || (Object(actual) === actual && Object(expect) === expect) && (Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect)) || Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every((key) => deepCompare(actual[key], expect[key])));

const reverseArray = (arr = []) => {
  return [...arr].reverse(); // Create a shallow copy and reverse it
};

// Function to compare arrays deeply
const deepcompare = (arr1, arr2) => 
  Array.isArray(arr1) &&
  Array.isArray(arr2) &&
  arr1.length === arr2.length &&
  arr1.every((val, index) => val === arr2[index]);

const _1_arg = [1, 2, 3];
const _1_returned = reverseArray(_1_arg);
console.assert(_1_arg !== _1_returned, '1.a: returns a new array');
console.assert(deepcompare(_1_returned, [3, 2, 1]),'1.b: reverses the entries');
console.assert(deepcompare(_1_arg, [1, 2, 3]), '1.c: _1_arg was not modified');

const _2_arg = [10, 11, 12, 13];
const _2_returned = reverseArray(_2_arg);
console.assert(_2_arg !== _2_returned, '2.a: returns a new array');
console.assert(deepcompare(_2_returned, [13, 12, 11, 10]),'2.b: reverses the entries');
console.assert(deepcompare(_2_arg, [10, 11, 12, 13]),'2.c: _2_arg was not modified');
