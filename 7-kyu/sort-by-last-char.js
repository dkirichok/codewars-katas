function last(x){
    return x.split(' ')
      .map(e => [...e].reverse().join(''))
      .sort((a, b) => a > b || a[0] === b[0] ? 1 : -1)
      .map(e => [...e].reverse().join(''));
}

/*
Description:
Given a string of words (x), you need to return an array of the words, 
sorted alphabetically by the final character in each.
If two words have the same last letter, they returned array should show 
them in the order they appeared in the given string.
All inputs will be valid.

Rank: 7 kyu

Link: https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0
*/