'use strict';

let userInput = '';
let repetitions = NaN;

while (true) {
  /* -- BEGIN: gather input and cast it to a number -- */
  userInput = prompt('Enter a phrase to repeat:');

  if (userInput === '' || userInput === null) {
    alert('Nope, enter something');
    continue;
  }

  const repetitionsInput = prompt('How many times do you want to repeat it?');

  repetitions = Number(repetitionsInput);

  if (
    Number.isNaN(repetitions) ||
    repetitions <= 0 ||
    !Number.isInteger(repetitions)
  ) {
    alert('"' + repetitionsInput + '" is not a valid positive whole number');
    continue;
  }
  /* -- END -- */

  /* -- BEGIN: ask the user to confirm their input -- */
  const confirmMessage = `Is this correct?\n\n- Phrase: "${userInput}"\n- Repetitions: ${repetitions}`;
  const confirmation = confirm(confirmMessage);

  if (confirmation) break;
  /* -- END -- */
}

/* -- BEGIN: repeat the input -- */
let repeatedInput = '';

for (let i = 0; i < repetitions; i++) {
  repeatedInput += userInput;
}
/* -- END -- */

const finalMessage = `"${userInput}" -> "${repeatedInput}"`;
alert(finalMessage);
