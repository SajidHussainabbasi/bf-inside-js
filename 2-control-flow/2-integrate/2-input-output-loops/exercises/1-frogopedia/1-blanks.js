'use strict';

let userInput = '';
let inputIsAboutFrogs = false;

while (!inputIsAboutFrogs) {
  userInput = prompt('Tell me something about frogs');
  console.log('userInput:', typeof userInput, userInput);

  // check if the user entered nothing or clicked cancel
  if (userInput === null || userInput === '') {
    alert('That is not something.');
    continue;
  }

  // search the user input for "frog", case insensitive
  if (/frog/i.test(userInput)) {
    inputIsAboutFrogs = true;
    continue;
  }

  alert('Nope, not about frogs. Try again.');
}

const finalMessage =
  'I just learned something cool about frogs!\n\n- "' + userInput + '"';
alert(finalMessage);