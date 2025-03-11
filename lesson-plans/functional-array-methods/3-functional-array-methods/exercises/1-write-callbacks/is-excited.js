/**
 * returns true if a string is excited
 * (meaning it contains an "!")
 * @param {string} str - the string
 * @returns {boolean} is it excited?
 */
 export const isExcited = (str) => {
  return str.split('').some((char) => char === '!');
};

const isExcitedDisplay = (str) => {
  console.log(isExcited(str)); // Logs true if the string contains "!"
};

isExcitedDisplay('Hello!'); // true
isExcitedDisplay('Hello'); // false
