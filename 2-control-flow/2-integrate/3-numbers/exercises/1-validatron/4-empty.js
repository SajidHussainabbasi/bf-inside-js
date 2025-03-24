
'use strict';


const userString = prompt('enter a number:');
const userNumber = Number(userString);

const inputIsANumber = !Number.isNaN(userNumber);

const confirmMessage =
  'Did you really enter a number?\n\n' + 'Yes -> "OK"\n' + 'No  -> "Cancel"';
const userThinksItsANumber = confirm(confirmMessage); 

const userIsCorrect = userThinksItsANumber === inputIsANumber; 
alert(userIsCorrect ? 'Correct!' : 'Nope :(');
