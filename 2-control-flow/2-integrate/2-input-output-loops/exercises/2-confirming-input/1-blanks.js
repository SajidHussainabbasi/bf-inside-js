

'use strict';

let userInput = '';
while (true) {
  userInput = prompt('enter your name:');
  console.log('userInput:', typeof userInput, userInput);

  if (userInput==null && userInput=='') {
    alert('nothing is not a name');
    continue;
  }

  // which user interaction returns a boolean value?
  const confirmMessage = 'is this correct?\n"' + userInput + '"';
  const userDidConfirm = confirm(confirmMessage);
  console.log('userDidConfirm:', typeof userDidConfirm, userDidConfirm);

  // which variable above has a value representing the user's confirmation?
  if (userInput!=null&&userInput!='') {
    break;
  }
}

const finalMessage = `your name is: "${userInput}"`;
alert(finalMessage);
