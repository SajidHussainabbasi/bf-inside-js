/**
 * reverses a string
 * @param {string} str - the string to reverse
 * @returns {string} the string, reversed
 */

const reverseString = (str = '') => str.split('').reverse().join('');

console.log(reverseString('hello')); // Output: "olleh"
console.log(reverseString('JavaScript')); // Output: "tpircSavaJ"
console.log(reverseString('racecar')); // Output: "racecar"
