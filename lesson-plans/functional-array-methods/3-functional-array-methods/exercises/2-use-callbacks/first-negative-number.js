/**
 * find the first negative number, returns undefined if there is none
 *  does not modify the array
 * @param {any[]} arr - the array of values
 * @returns {(number|undefined)} the first negative number
 */
const firstNegativeNumber = (arr) =>
  arr.find((num) => typeof num === 'number' && num < 0);

console.log(firstNegativeNumber([3, 5, -2, 8, -7])); // Output: -2
console.log(firstNegativeNumber([10, 20, 30])); // Output: undefined
console.log(firstNegativeNumber([-1, -2, -3])); // Output: -1
console.log(firstNegativeNumber(['hello', -4, 6])); // Output: -4
console.log(firstNegativeNumber(['text', true, {}])); // Output: undefined
