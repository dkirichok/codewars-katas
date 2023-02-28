function isPrime(num) {
  if (num < 2) {
    return false;
  }
  if (num === 2 || num === 3) {
    return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

/* 
Description:
Define a function that takes an integer argument and returns a logical value 
true or false depending on if the integer is a prime.
Per Wikipedia, a prime number ( or a prime ) is a natural number greater 
than 1 that has no positive divisors other than 1 and itself.

Rank: 6 kyu

Link: https://www.codewars.com/kata/5262119038c0985a5b00029f
*/
