import { readNumber, display } from '../../../../lib/dom-io.js';

document.getElementById('do-math').addEventListener('click', () => {
  debugger;

  // read user values
  let leftNum= readNumber('left');
  let rightNum= readNumber('right');
  let multiply=0;


  //  multiply the two numbers

  multiply=leftNum*rightNum;

  // display the product
  display('product',multiply);
});
