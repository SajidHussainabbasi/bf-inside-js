'use strict';

let userInput = '';
let isTooShort = true;

while (isTooShort) {
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
  isTooShort = false;
}

const finalMessage =
  '"' + userInput + '" is ' + userInput.length + ' characters long.';
alert(finalMessage);