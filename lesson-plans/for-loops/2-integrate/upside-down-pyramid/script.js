import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById('pyramid-it').addEventListener('click', () => {
  debugger;

  // read user text
  let userText = readString('to-pyramid');

  // create the pyramid
  let Pyramid = '';
  for (let i = userText.length; i >= 1; i--) {
    Pyramid += userText.substr(0, i) + '\n';
  }
  console.log(Pyramid);
  // display the pyramid
  display('pyramided', Pyramid);
});
