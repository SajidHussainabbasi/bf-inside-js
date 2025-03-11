/**
 * takes an array of strings and returns a new array
 *  the new array contains all the numbery strings, cast to number
 * does not modify the argument
 * @param {string[]} arr - the array of strings
 * @returns {number[]} an array containing numbers that aren't NaN
 */
 const numberyNumberify = (arr) => 
  arr
    .filter(str => !isNaN(str) && str.trim() !== '') // Keep only valid number-like strings
    .map(Number); // Convert to numbers

// Example Usage:
console.log(numberyNumberify(["42", "3.14", "hello", "100", "NaN", ""])); // Output: [42, 3.14, 100]
console.log(numberyNumberify(["10", "20", "30"])); // Output: [10, 20, 30]
console.log(numberyNumberify(["abc", "xyz", "1.5"])); // Output: [1.5]
console.log(numberyNumberify(["  7 ", "8.9", "NaN", "0"])); // Output: [7, 8.9, 0]
console.log(numberyNumberify([])); // Output: []
