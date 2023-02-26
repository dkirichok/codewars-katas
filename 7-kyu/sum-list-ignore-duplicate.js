function sumNoDuplicates(numList) {
    return numList.length > 0 ? numList.sort((a, b) => a - b)
      .filter((e, i, a) => e !== a[i+1] && e !== a[i-1])
      .reduce((a, b) => a + b, 0) : 0;
}

/*
Description:
Please write a function that sums a list, but ignores any duplicate items in the list.
For instance, for the list [3, 4, 3, 6] , the function should return 10.

Rank: 7 kyu

Link: https://www.codewars.com/kata/5993fb6c4f5d9f770c0000f2
*/