'use strict';

let validInput = '';
let isValid = false;

while (!isValid) {
  const userInput = prompt('Enter anything with "e" or "E" as the 5th letter');

  if (userInput === null || userInput === '') {
    alert('That is nothing');
  } else if (userInput.length < 5) {
    alert('Too short');
  } else if (userInput[4] === 'e' || userInput[4] === 'E') {
    validInput = userInput;
    isValid = true; // This ensures the loop stops when valid input is found
  } else {
    alert('Input has no "e" or "E" as the 5th character');
  }
}

alert('Done: "' + validInput + '"');
