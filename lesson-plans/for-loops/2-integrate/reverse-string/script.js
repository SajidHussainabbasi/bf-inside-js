import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById('reverse-it').addEventListener('click', () => {
  debugger;

  // read user text
let userText= readString("user-text");
  // use a for loop that counts down (i--) to reverse the input
let result= "";

  for (let i=userText.length-1;i>=0;i--) {
      result+=userText[i];
  }
  // display the reversed string
   display("reversed-output",result);
});

  
  