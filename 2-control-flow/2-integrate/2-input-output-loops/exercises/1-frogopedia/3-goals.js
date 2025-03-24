'use strict';

let userInput = '';
while (true) {
  userInput = prompt('tell me something about frogs');

  /* -- BEGIN: validate input -- */
  if ((userInput === '') && (userInput === null)) {
    alert('that is not something');
    continue;
  } else if (/frog/i.test(userInput) === true) {
    break;
  } else {
    alert('nope, not about frogs.  try again.');
    break;
  }

  /* -- END: validate input -- */
}

const finalMessage =
  'i just learned something cool about frogs!\n\n- "' + userInput + '"';
alert(finalMessage);
