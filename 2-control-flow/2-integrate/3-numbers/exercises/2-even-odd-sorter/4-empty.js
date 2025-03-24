'use strict';

let userNumber = NaN;
while (true) {
  const userInput = prompt('Enter a number');

  /* -- BEGIN: exit if userInput is a valid number -- */
  if (userInput === '' || userInput === null) {
    alert('Enter something!');
    continue; // Ask again if the input is empty or canceled
  }

  userNumber = Number(userInput); // Convert input to a number

  if (!Number.isNaN(userNumber)) {
    break; // Exit loop if the input is a valid number
  }

  alert(`"${userInput}" is not a number`); // Notify user of invalid input
  /* -- END -- */
}

const message = userNumber % 2 === 0 ? ' is even' : ' is odd';
alert(userNumber + message);
