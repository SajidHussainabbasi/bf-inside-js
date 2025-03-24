'use strict';

/* for character of String

  iterating through each character in a string is so common
  that there's special syntax to make it easier

*/

let userInput = '';
while (true) {
  userInput = prompt('Enter a word to filter:');

  /* -- BEGIN: validate input -- */
  if (userInput === null || userInput.trim() === '') {
    alert('Nope, enter something');
    continue;
  }

  if (/\s/.test(userInput)) {
    alert("Words can't have white space");
    continue;
  }
  /* -- END: validate input -- */

  break;  // Exit the loop once valid input is received
}

const removeVowels = confirm(`What would you like to remove from "${userInput}"?
- OK: Remove vowels
- Cancel: Remove consonants
`);

let toRemove = '';
if (removeVowels) {
  toRemove = 'aeiouAEIOU'; // Include both lowercase & uppercase vowels
} else {
  toRemove = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'; // Consonants
}

let filteredInput = '';
/* -- BEGIN: filter input -- */
for (const character of userInput) {
  if (!toRemove.includes(character)) {
    filteredInput += character;  // Add character if not in `toRemove`
  }
}
/* -- END: filter input -- */

const finalMessage = `"${userInput}" -> "${filteredInput}"`;
alert(finalMessage);