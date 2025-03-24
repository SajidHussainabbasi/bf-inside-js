'use strict';

let userInput = '';
let userConfirmed = false;
while (!userConfirmed) {
  // Fix: Loop runs until user confirms
  userInput = prompt('Enter a word to filter:');

  if (userInput === '' || userInput === null) {
    alert('Nope, enter something');
    continue;
  } else {
    userConfirmed = true;
  }

  // Regular expression to check for whitespace
  const whiteSpaceRegex = new RegExp('\\s', 'g');
  if (whiteSpaceRegex.test(userInput)) {
    alert("Words can't have white space");
    continue;
  }

  // Ask for confirmation
  const confirmMessage =
    'Do you want to filter this word?\n\n' + '- "' + userInput + '"';
  userConfirmed = confirm(confirmMessage); // Fix: Assign value correctly
}

// Fix: Use `confirm` instead of `alert`
const removeVowels = confirm(`What would you like to remove from "${userInput}"?
- OK: Remove vowels
- Cancel: Remove consonants
`);

const toRemove = removeVowels ? 'aeiou' : 'bcdfghjklmnpqrstvwxyz';

let filteredInput = '';
for (let i = 0; i < userInput.length; i++) {
  // Fix: Start at 0
  const character = userInput[i];
  const lowerCaseCharacter = character.toLowerCase();

  if (!toRemove.includes(lowerCaseCharacter)) {
    // Fix: Only keep valid characters
    filteredInput += character;
  }
  if (userInput) {
    userConfirmed = true;
    break;
  }
}

const finalMessage = `"${userInput}" -> "${filteredInput}"`;
alert(finalMessage);
