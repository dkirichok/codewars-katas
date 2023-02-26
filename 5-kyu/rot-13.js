function rot13(str) {
  let arr = [];
  for (let i of str) {
    let letterCode = i.charCodeAt(0);
    if (
      (letterCode >= 65 && letterCode <= 77) ||
      (letterCode >= 97 && letterCode <= 109)
    ) {
      letterCode = String.fromCharCode(letterCode + 13);
    } else if (
      (letterCode >= 78 && letterCode <= 90) ||
      (letterCode >= 110 && letterCode <= 122)
    ) {
      letterCode = String.fromCharCode(letterCode - 13);
    } else {
      letterCode = i;
    }
    arr.push(letterCode);
  }
  return arr.join("");
}


/* 
Description:
How can you tell an extrovert from an introvert at NSA?
Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.
I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.
For this task you're only supposed to substitute characters. Not spaces, 
punctuation, numbers, etc.
Test examples:
"EBG13 rknzcyr." -> "ROT13 example."
"This is my first ROT13 excercise!" -> "Guvf vf zl svefg EBG13 rkprepvfr!"

Rank: 5 kyu

Link: https://www.codewars.com/kata/52223df9e8f98c7aa7000062
*/