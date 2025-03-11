/**
 * joins two strings with a comma and a space
 * @param {string} acc - the left string
 * @param {string} str - the right string
 * @returns {string} the strings, joined
 */

const joinWithComma = (str1, str2) => `${str1}, ${str2}`;

const joinArrayWithComma = (arr) => {
  if (arr.length === 0) return ''; // Handle empty array case
  if (arr.length === 1) return arr[0]; // Handle single-element array case

  let result = ''; // Initialize empty string

  arr.forEach((str, index) => {
    result += str; // Append the string

    // Add ", " only if it's not the last element
    if (index < arr.length - 1) {
      result += ', ';
    }
  });

  return result;
};

console.log(joinArrayWithComma(['Sajid', 'Hussain'])); // Output: "Sajid, Hussain"
console.log(joinArrayWithComma([])); // Output: ""
console.log(joinArrayWithComma(['Hello'])); // Output: "Hello"
console.log(joinArrayWithComma(['A', 'B', 'C', 'D'])); // Output: "A, B, C, D"
