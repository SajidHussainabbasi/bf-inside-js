'use strict';

console.log('-- begin --');

// filtering is when you are given many things and only keep a few of them
// filtering an array is the same, given an array of many things
//  create a new array containing only some of them
// psst.  use the Debugger or JS Tutor
//  practice using breakpoints to skip to the lines you want to study

const _1_words = ['chair', 'quote', 'bucket', 'sofa'];
// keep the words with an "a"
const _1_wordsWithA = _1_words.filter((word) => word.includes('a'));
console.log(_1_wordsWithA);

const _2_numbers = [-5, 0, 13, 100];

// keep numbers less than 0

const _2_lessThanZero = _2_numbers.filter((num) => num < 0);
console.log(_2_lessThanZero);

// keep numbers that are divisible by 2
const _3_evenNumbers = _2_numbers.filter(
  (_3_evenNumbers) => _3_evenNumbers % 2 == 0,
);
console.log(_3_evenNumbers);
console.log('-- end --');
