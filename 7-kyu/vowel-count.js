function getCount(str) {
  let count = 0;
  str = str
    .split("")
    .map((e) => +e.replace(/[aouei]/gi, 1))
    .filter((e) => (e == 1 ? count++ : 0));
  return count;
}

/* 
Description:
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.

Rank: 7 kyu

Link: https://www.codewars.com/kata/54ff3102c1bad923760001f3
*/

