'use strict';

let userInput = '';
let toggle = true;

while ((userInput === '' || userInput == null) && toggle) {
  /* -- BEGIN: validate input -- */
  userInput = prompt('Enter anything longer than 5 characters');
  console.log('userInput:', typeof userInput, userInput);

  // Check if the user entered nothing or clicked cancel
  if (userInput === null || userInput.trim() === '') {
    alert('Please enter something.');
    continue;
  }

  // Check if the input is too short
  if (userInput.length <= 5) {
    alert('Too short! Try again.');
    continue;
  }

  // Input is valid, exit loop
  toggle = false;
  /* -- END: validate input -- */
}

const finalMessage =
  '"' + userInput + '" is ' + userInput.length + ' characters long.';
alert(finalMessage);

