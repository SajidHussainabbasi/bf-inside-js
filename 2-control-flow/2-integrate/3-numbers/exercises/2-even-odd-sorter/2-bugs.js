'use strict';

/* look out for:

  - variable declarations
  - conditional checks
  - break vs. continue
  - incorrect casting to Number

*/

let userNumber = NaN; // Changed 'const' to 'let' to allow reassignment

while (Number.isNaN(userNumber)) {
  const userInput = prompt('Enter a number');

  if (userInput === '' || userInput === null) {
    // Fixed logical condition
    alert('Enter something!');
    continue; // Changed 'break' to 'continue' so the loop keeps asking
  }

  userNumber = Number(userInput); // Fixed incorrect casting to a number

  if (Number.isNaN(userNumber)) {
    alert('"' + userInput + '" is not a number'); // Fixed alert message syntax
  }
}

if (userNumber % 2 === 0) {
  alert(userNumber + ' is even');
} else {
  alert(userNumber + ' is odd');
}
