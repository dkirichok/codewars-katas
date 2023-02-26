function solution(str) {
  str = str.length % 2 !== 0 ? str + "_" : str;
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(str[i] + str[++i]);
  }
  return arr;
}

/* 
Description:
Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters then it should replace 
the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

Rank: 6 kyu

Link: https://www.codewars.com/kata/515de9ae9dcfc28eb6000001
*/
