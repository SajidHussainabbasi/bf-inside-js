'use strict';

let validInput = '';
let index = 0;

while (validInput === '') {
  index = index + 1; // Increment index

  const userInput = prompt(
    `Enter anything with "e" or "E" as the ${index}th letter`,
  );

  if (userInput === null || userInput === '') {
    alert('That is nothing');
  } else if (userInput.length < index) {
    alert('Too short');
  } else if (userInput[index - 1] === 'e' || userInput[index - 1] === 'E') {
    validInput = userInput;
  } else {
    alert('Input does not have "e" or "E" at the required position');
  }
}

alert('Done: "' + validInput + '"');
