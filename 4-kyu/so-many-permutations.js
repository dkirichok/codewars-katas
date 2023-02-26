function permutations(string) {
  const res = new Array();
  const shuffle = () => {
    res.push(
      Array.from(string)
        .sort(() => Math.random() - 0.5)
        .join("")
    );
  };
  for (let i = 0; i < string.length * 1000; i++) {
    !res.includes(shuffle()) ? shuffle() : res;
  }
  return Array.from(new Set(res)).sort();
}


/* 
Description:
In this kata, your task is to create all permutations of a non-empty 
input string and remove duplicates, if present.
Create as many "shufflings" as you can!
Examples:
With input 'a':
Your function should return: ['a']
With input 'ab':
Your function should return ['ab', 'ba']
With input 'abc':
Your function should return ['abc','acb','bac','bca','cab','cba']
With input 'aabb':
Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

Rank: 4 kyu

Link: https://www.codewars.com/kata/5254ca2719453dcc0b00027d
*/