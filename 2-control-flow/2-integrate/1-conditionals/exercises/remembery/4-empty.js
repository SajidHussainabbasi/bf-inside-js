'use strict';

alert(`Remembery, the game of remembering.

You will be prompted to enter 3 phrases.
Next, you will be prompted to remember one of them.

If you enter it exactly, you win!`);

let input1 = '';
let input2 = '';
let input3 = '';

while (input1 === '' || input1 === null) {
  input1 = prompt('Enter your first secret phrase:');
}
while (input2 === '' || input2 === null) {
  input2 = prompt('Enter your second secret phrase:');
}
while (input3 === '' || input3 === null) {
  input3 = prompt('Enter your third secret phrase:');
}

alert('All saved! Get ready to remember.');

const randomDecimal = Math.random();
const decimalTimes3 = randomDecimal * 3;
const randomFrom1To3 = Math.ceil(decimalTimes3);

const attempt = prompt('Enter phrase number ' + randomFrom1To3);

let correctAnswer = '';
if (randomFrom1To3 === 1) {
  correctAnswer = input1;
} else if (randomFrom1To3 === 2) {
  correctAnswer = input2;
} else if (randomFrom1To3 === 3) {
  correctAnswer = input3;
}

/* -- BEGIN: check if the user was correct and let them know -- */
const guessIsCorrect = attempt === correctAnswer;

const gameResult = guessIsCorrect
  ? `Correct! Phrase ${randomFrom1To3} was "${correctAnswer}".`
  : `Nope :( The correct phrase was "${correctAnswer}".`;

alert(gameResult);
/* -- END: check if the user was correct and let them know -- */
