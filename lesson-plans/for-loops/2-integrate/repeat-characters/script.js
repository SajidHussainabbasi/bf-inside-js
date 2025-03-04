import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('repeat-them').addEventListener('click', () => {
  debugger;

  // read user values
let userText= readString('user-text');
let numberOftimes= readNumber('number-of-times');
  // repeat the characters in the text
let result= "";

  for (let i=0;i<userText.length;i++) {
    
    for (let j=0; j<numberOftimes; j++) {
      result+=userText[i];
     
    }
  }

  // display the text with repeated characters
  display("repeated-output",result);
});
