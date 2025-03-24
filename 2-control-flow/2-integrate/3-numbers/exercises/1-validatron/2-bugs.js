'use strict';

/* look out for:

  - an incorrect way to check for NaN
  - incorrect interaction function
  - comparison vs. assignment

*/

const userString = prompt('enter a number:');
const userNumber = Number(userString);

const inputIsANumber = !Number.isNaN(userNumber); // Corrected NaN check

const confirmMessage =
  'Did you really enter a number?\n\n' + 'Yes -> "OK"\n' + 'No  -> "Cancel"';
const userThinksItsANumber = confirm(confirmMessage); // Corrected interaction function

const userIsCorrect = userThinksItsANumber === inputIsANumber; // Fixed comparison vs. assignment

alert(userIsCorrect ? 'Correct!' : 'Nope :(');
