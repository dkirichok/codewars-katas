var countBits = function (n) {
  let res = 0;
  for (; Math.floor(n / 2) >= 0; ) {
    res += n % 2;
    n = Math.floor(n / 2);
    if (n == 0) break;
  }
  return n >= 0 ? res : false;
};

/* 
Description:
Write a function that takes an integer as input, and returns 
the number of bits that are equal to one in the binary representation 
of that number. You can guarantee that input is non-negative.
Example: The binary representation of 1234 is 10011010010, 
so the function should return 5 in this case

Rank: 6 kyu

Link: https://www.codewars.com/kata/526571aae218b8ee490006f4
*/