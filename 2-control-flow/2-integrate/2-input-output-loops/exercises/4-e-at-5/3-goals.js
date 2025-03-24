'use strict';

let validInput = '';
let isNotValid = true;

while (isNotValid) {
  const userInput = prompt('Enter anything with "e" or "E" as the 5th letter');

  /* -- BEGIN: validate input -- */
  if (userInput === null || userInput === '') {
    alert('That is nothing');
  } else if (userInput.length < 5) {
    alert('Too short');
  } else if (userInput[4] === 'e' || userInput[4] === 'E') {
    validInput = userInput;
    isNotValid = false; // Stops the loop when input is valid
  } else {
    alert('Input has no "e" or "E" as the 5th character');
  }
  /* -- END: validate input -- */
}

alert('Done: "' + validInput + '"');