function capitalize(s,arr){
    return s.split('').map((e, index) => arr.includes(index) 
    ? e.toUpperCase() : e).join('');
};

/* 
Descrition:
Given a string and an array of integers representing indices, 
capitalize all letters at the given indices.
For example:
capitalize("abcdef",[1,2,5]) = "aBCdeF"
capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
The input will be a lowercase string with no spaces and an array of digits.

Rank: 7 kyu

Link: https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1
*/