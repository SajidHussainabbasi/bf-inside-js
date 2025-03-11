'use strict';

console.log('-- begin --');

// mapping means to convert something to something else
//  using a clearly defined process
// mapping an array means creating a new array with the same number of items
//  each item has been transformed in the same way
// psst.  use the Debugger or JS Tutor
//  practice using breakpoints to skip to the lines you want to study

const values = [NaN, 'tree', false, 42, null];

// map using typeof
const _1_types = values.map((value) => typeof value);

console.log(_1_types);

// map using boolean coercion and + 'y'

const _2_truthiness = values.map(value => (value ? 'true' : 'false') + 'y');

console.log(_2_truthiness);

const _3_strings = ['infinity', '1.4', '1000', 'NaN'];

// map according to if a string is NaNy

const _3_areNaNy = _3_strings.map(str => {
  const num = Number(str);
  return Number.isNaN(num);
});

console.log('-- end --');
