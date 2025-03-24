'use strict';

/* for character of String

  iterating through each character in a string is so common
  that there's special syntax to make it easier

*/

let userInput = '';
let userConfirmed = false;
while (!userConfirmed) {
  userInput = prompt('Enter a word to filter:');

  if (userInput === '' || userInput === null) {
    alert('Nope, enter something');
    continue;
  }

  const whiteSpaceRegex = new RegExp('\\s', 'g');
  if (whiteSpaceRegex.test(userInput)) {
    alert("Words can't have white space");
    continue;
  }

  const confirmMessage =
    'Do you want to filter this word?\n\n' + '- "' + userInput + '"';
  userConfirmed = confirm(confirmMessage);
}

const removeVowels = confirm(`What would you like to remove from "${userInput}"?
- OK: Vowels
- Cancel: Consonants
`);

const toRemove = removeVowels ? 'aeiou' : 'bcdfghjklmnpqrstvwxyz';

let filteredInput = '';
for (const character of userInput) {
  const lowerCaseCharacter = character.toLowerCase();
  if (toRemove.includes(lowerCaseCharacter)) {
    continue; // Skip the character if it should be removed
  }
  filteredInput += character;
  if (confirm(confirmMessage)) {
    break;  // Exits the loop
  }

}

const finalMessage = `"${userInput}" -> "${filteredInput}"`;
alert(finalMessage);
