function moveZeros(arr) {
  let resArr = [];
  let i = 0;
  for (let e of arr) {
    e === 0 ? resArr.unshift(e) && i++ : resArr.push(e);
  }
  return resArr.splice(i).concat(resArr.splice(0, i));
}

/* 
Description: 
Write an algorithm that takes an array and moves all of the zeros 
to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

Rank: 5 kyu

Link: https://www.codewars.com/kata/52597aa56021e91c93000cb0
*/