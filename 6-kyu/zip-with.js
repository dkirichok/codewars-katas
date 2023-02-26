function zipWith(fn, a0, a1) {
  const firstArr = [...a0];
  const secondArr = [...a1];
  const resArr = [];

  if (firstArr.length > secondArr.length) {
    while (firstArr.length > secondArr.length) {
      firstArr.pop();
    }
  } else if (secondArr.length > firstArr.length) {
    while (secondArr.length > firstArr.length) {
      secondArr.pop();
    }
  }

  if (firstArr.length === secondArr.length) {
    for (let i in firstArr) {
      resArr.push(fn(firstArr[i], secondArr[i]));
    }
  }
  return resArr;
}


/* 
Description: 
zipWith ( or zip_with ) takes a function and two arrays and zips the arrays 
together, applying the function to every pair of values.
The function value is one new array.
If the arrays are of unequal length, the output will only be as long as the shorter one.
(Values of the longer array are simply not used.)
Inputs should not be modified.

zipWith( Math.pow, [10,10,10,10], [0,1,2,3] )      =>  [1,10,100,1000]
zipWith( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] )  =>  [4,7,7,4,7,7]

Rank: 6 kyu

Link: https://www.codewars.com/kata/5825792ada030e9601000782
*/