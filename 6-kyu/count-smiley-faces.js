function countSmileys(arr) {
  return arr.filter((e) => {
    if (e.length === 2) {
      return (e[0] === ":" || e[0] === ";") && (e[1] === ")" || e[1] === "D");
    } else if (e.length === 3) {
      return (
        (e[0] === ":" || e[0] === ";") &&
        (e[1] === "-" || e[1] === "~") &&
        (e[2] === ")" || e[2] === "D")
      );
    }
  }).length;
}

/* 
Description: 
Given an array (arr) as an argument complete the function countSmileys that should 
return the total number of smiling faces.
Rules for a smiling face:
Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.
Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Link: https://www.codewars.com/kata/583203e6eb35d7980400002a

Rank: 6 kyu
*/
