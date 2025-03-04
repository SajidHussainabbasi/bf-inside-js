
/*
  create a loop that will log the letters in reverse order
*/


let before = 'toadstools';
let after = '';

for (let i = before.length - 1; i >= 0; i--) { // this loop will reverse the string
  after += before[i];
}
console.log(after) // read the reverse string
// begin distractors

//after += before.i; // distractor

//for (let i = before.length; i === 0; i--) { // distractor
//for (let i = before.length - 1; i !== 0; i++) { // distractor
//for (let i = before - 1; i !== 0; i--) { // distractor
