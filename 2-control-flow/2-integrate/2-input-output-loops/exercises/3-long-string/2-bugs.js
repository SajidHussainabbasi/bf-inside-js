'use strict';

/* look out for:

  - loop checks
  - conditional checks
  - variable declarations
  - assignment vs. comparison

*/

let userInput = '';
let isLongEnough = true;
while (isLongEnough) {
  userInput = prompt('enter anything longer than 5 characters');

  if (userInput == null || userInput == '') {
    alert('that is nothing');
    continue;
  } else if (userInput.length <= 5) {
    alert('too short');
    continue
  } else {
    isLongEnough =false;
    continue
  }
}

const finalMessage =
  '"' + userInput + '" is ' + userInput.length + ' characters long';
alert(finalMessage);
