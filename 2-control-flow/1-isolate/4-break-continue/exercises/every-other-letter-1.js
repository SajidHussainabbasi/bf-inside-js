'use strict';

console.log('-- begin --');

const word = 'pitsicola';

let index = 0;
let logThisOne = true;
while (index < word.length) { // loop until the last letter
  index += 1; // increment index

  logThisOne = !logThisOne; // toggle the boolean flag
  if (!logThisOne) {
    continue; // skip to the next iteration if logThisOne is false
  }

  const nextLetter = word[index];
  console.log(index + ': ', nextLetter); // expected output: i, s, c, l
}

console.assert(index === word.length, 'there are this many letters in the word');

console.log('-- end --');
