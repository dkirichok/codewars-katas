function reverseWords(str) {
    return str.split(/\s/g).map(e => [...e].reverse().join('')).join(' ');
}

/*
Description: 
Complete the function that accepts a string parameter, 
and reverses each word in the string. All spaces in the string should be retained.

Rank: 7 kyu

Link: https://www.codewars.com/kata/5259b20d6021e9e14c0010d4
*/