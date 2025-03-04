import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('skip-them').addEventListener('click', () => {
  debugger;

  // read user values
  let userInput = readString('user-text');
  let skipSize = readNumber('skip-size');
  let result = '';
  // create a new string with skipped characters
  for (let i = 0; i < userInput.length; i++) {
    if ((i + 1) % skipSize !== 0) {
      result += userInput[i];
    }
  }

  // display the skipped string
  display('skipped-output', result);
});
