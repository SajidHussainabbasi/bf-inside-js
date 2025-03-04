
/*
  which body will pass the assertion?
*/

let count = 0;
for (let i = 0; i < 5; i++) {
  count = count + i;          // The loop body is the correct one that passes the assertion
}
console.log(count === 10);

// begin distractors

count = count; // distractor
let i=0;
count = i; // distractor
count = count + 1; // distractor
