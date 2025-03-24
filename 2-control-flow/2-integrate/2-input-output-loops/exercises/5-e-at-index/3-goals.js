'use strict';


let validInput = '';

let index = 0;
while (true) {
  index = index + 1;

  const userInput = prompt(
    `Enter anything with "e" or "E" as the ${index}th letter`,
  );

  // Make sure the user entered something
  if (userInput === null || userInput === '') {
    alert('That is nothing');
    continue; // Ask for input again
  }

  // Make sure it is long enough
  if (userInput.length < index) {
    alert('Too short');
    continue; // Ask for input again
  }

  // Check if the required character is 'e' or 'E'
  if (userInput[index - 1] === 'e' || userInput[index - 1] === 'E') {
    validInput = userInput;
    break; // Stop the loop when valid input is found
  }

  alert(`Input has no "e" or "E" as the ${index}th character`);
}

alert('Done: "' + validInput + '"');
