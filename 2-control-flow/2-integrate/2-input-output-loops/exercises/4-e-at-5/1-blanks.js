'use strict';

let validInput = '';
while (true) {
  const userInput = prompt('Enter anything with "e" or "E" as the 5th letter');
  console.log('userInput:', typeof userInput, userInput);

  // make sure the user entered something
  if (!userInput) {
    alert('You must enter something!');
    continue;
  }

  // make sure it is long enough to have an "e" in the 5th letter
  if (userInput.length < 5) {
    alert('Input must be at least 5 characters long.');
    continue;
  }

  // check if the 5th character is an "e" or "E"
  if (userInput[4] === 'e' || userInput[4] === 'E') {
    validInput = userInput;
    break;
  }

  alert('Input has no "e" or "E" as the 5th character');
}

alert('Done: "' + validInput + '"');
