'use strict';

console.log('-- begin --');

const school = 'HackYourFuture';

for (const letter of school) {
  console.log('For of Loop',letter);
}

// write this for...of loop as a for loop:

for (let i=0; i<school.length-1; i++) {
console.log('For Loop',school[i]);
}

// write this for loop as a while loop:
let j=0;
while (j<school.length-1) {
  console.log('While loop',school[j]);
  j++;
}

console.log('-- end --');
