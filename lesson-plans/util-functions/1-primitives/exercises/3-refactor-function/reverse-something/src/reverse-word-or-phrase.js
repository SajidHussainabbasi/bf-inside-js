import {
  readString,
  readSelection,
  display,
} from '../../../../../../../lib/dom-io.js';

import { reverse } from './utils/reverse.js';

const reverseWordOrPhrase = () => {
  debugger;

  // --- read user input ---
  const userText = readString('user-text');
  const reverseType = readSelection('reverse-type');

  // --- reverse either the whole thing or each word ---
  let reversed = '';
  if (reverseType === 'each') {
    const splitText = userText.split(' ');

    // Refactored: Call `reverse` for each word
    const newWords = splitText.map(word => reverse(word));

    reversed = newWords.join(' ');
  } else {
    // Refactored: Call `reverse` for the entire text
    reversed = reverse(userText);
  }

  // --- display the reversed input ---
  display('reversed-output', reversed);
};

document.getElementById('do-it').addEventListener('click', reverseWordOrPhrase);