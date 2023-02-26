function pigIt(str) {
  return str
    .split(" ")
    .map((item) =>
      !item.match(/[.,:!?]/) ? item.slice(1) + item[0] + "ay" : item
    )
    .join(" ");
}

/* 
Description: 
Move the first letter of each word to the end of it, then add "ay" 
to the end of the word. Leave punctuation marks untouched.
Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

Rank: 5 kyu

Link: https://www.codewars.com/kata/520b9d2ad5c005041100000f
*/
