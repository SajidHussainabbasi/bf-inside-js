'use strict';

const instructions =
  'Remembery, the game of remembering.\n\n' +
  'You will be prompted to enter 3 phrases.\n' +
  'Next, you will be prompted to remember one of them.\n\n' +
  'If you enter it exactly, you win!';
alert(instructions);

let input1 = prompt('Enter your first secret phrase:');
while (input1 === '' || input1 === null) {
  input1 = prompt('Enter your first secret phrase:');
}

let input2 = prompt('Enter your second secret phrase:');
while (input2 === '' || input2 === null) {
  input2 = prompt('Enter your second secret phrase:');
}

let input3 = prompt('Enter your third secret phrase:');
while (input3 === '' || input3 === null) {
  input3 = prompt('Enter your third secret phrase:');
}

alert('All saved! Get ready to remember.');

const randomFrom1To3 = Math.ceil(Math.random() * 3);
const userGuess = prompt(`Enter phrase number ${randomFrom1To3}:`);

let phraseToGuess = '';
if (randomFrom1To3 === 1) {
  phraseToGuess = input1;
} else if (randomFrom1To3 === 2) {
  phraseToGuess = input2;
} else if (randomFrom1To3 === 3) {
  phraseToGuess = input3;
}

const guessIsCorrect = phraseToGuess === userGuess;

const gameResult = guessIsCorrect
  ? `Correct! Phrase ${randomFrom1To3} was "${phraseToGuess}".`
  : `Nope :( The correct phrase was "${phraseToGuess}".`;

alert(gameResult);