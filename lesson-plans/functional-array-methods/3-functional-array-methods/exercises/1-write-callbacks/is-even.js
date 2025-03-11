/**
 * returns true if a number is even
 * otherwise returns false
 * @param {number} num - the number
 * @returns {boolean} is the number even?
 */
export const isEven = (num, callback) => {
  const result = num % 2 === 0;
  callback(result);
};

isEven(4, (isEven) => {
  console.log(isEven); // true
});

isEven(7, (isEven) => {
  console.log(isEven); // false
});
