/**
 * returns true if a string is longer than 5 characters
 * otherwise returns false
 * @param {string} str - the string to check
 * @returns {boolean} is the string longer than 5?
 */
const longerThanFive = (str) => str.length > 5;

console.log(longerThanFive('Hello')); // false
console.log(longerThanFive('JavaScript')); // true
console.log(longerThanFive('World')); // false
console.log(longerThanFive('Coding')); // true
