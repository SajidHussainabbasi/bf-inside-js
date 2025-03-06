'use strict';

console.log('-- begin --');

/**
 * 
 *check the string is palindrome or not plaindrome
 * @param {any} use for loop to reversed and then compare with param string
 * @Return{true or false}  string is palindrome or not palindrome
 */
const isPalindrome = (toCheck) => {
  let reversed = '';
  for (const character of toCheck) {
    reversed = character + reversed;
  }
  return toCheck === reversed;
};

const _1_expect = false;
const _1_actual = isPalindrome('Racecar');
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = false;
const _2_actual = isPalindrome('apple');
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = true;
const _3_actual = isPalindrome('racecar');
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = true;
const _4_actual = isPalindrome('hannah');
console.assert(_4_actual === _4_expect, 'Test 4');

console.log('-- end --');
