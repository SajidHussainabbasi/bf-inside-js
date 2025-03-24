'use strict';

let userInput = '';
let repetitions = NaN;

while (true) {
  /* gather a string from the user */
  userInput = prompt('Enter a phrase to repeat:');

  /* make sure the user input something */
  if (userInput === '' || userInput === null) {
    alert('Nope, enter something');
    continue;
  }

  /* ask the user for a number */
  const repetitionsInput = prompt('How many times do you want to repeat it?');

  /* convert their string to a number */
  repetitions = Number(repetitionsInput);

  /* make sure the user input a valid number */
  if (
    Number.isNaN(repetitions) ||
    repetitions <= 0 ||
    !Number.isInteger(repetitions)
  ) {
    alert('"' + repetitionsInput + '" is not a valid positive whole number');
    continue;
  }

  /* ask the user to confirm their input */
  const confirmMessage =
    'Is this correct?\n\n' +
    '- Phrase: "' +
    userInput +
    '"\n' +
    '- Repetitions: ' +
    repetitions;
  const confirmation = confirm(confirmMessage);
  if (confirmation) {
    break;
  }
}

let repeatedInput = '';

/* repeat the user input `repetitions` number of times */
for (let i = 0; i < repetitions; i++) {
  repeatedInput += userInput;
}

const finalMessage = `"${userInput}" -> "${repeatedInput}"`;
alert(finalMessage);
