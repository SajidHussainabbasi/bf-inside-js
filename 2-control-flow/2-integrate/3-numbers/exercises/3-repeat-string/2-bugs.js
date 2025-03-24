'use strict';

/* look out for:

  - variable declarations
  - missing condition in while loop
  - off-by-one in for loop
  - missing string concatenation

*/

let userInput = ''; // Changed const -> let
let repetitions = NaN; // Changed const -> let

while (true) {
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
    alert(`"${repetitionsInput}" is not a valid positive whole number`);
    continue;
  }

  const confirmMessage = `Is this correct?\n\n- Phrase: "${userInput}"\n- Repetitions: ${repetitions}`;
  const confirmation = confirm(confirmMessage);

  if (confirmation) break; // Exits the loop when user confirms
}

let repeatedInput = '';

for (let i = 0; i < repetitions; i++) {
  // Fixed off-by-one error
  repeatedInput += userInput; // Fixed concatenation issue
}

alert(`"${userInput}" -> "${repeatedInput}"`); // Corrected message
