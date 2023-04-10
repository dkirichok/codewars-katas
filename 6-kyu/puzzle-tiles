function puzzleTiles(width, height) {
  const firstLine = `   ${"_( )__ ".repeat(width).trim()}`;
  const lastInRaw = ` ${"|__( )_".repeat(width)}|`;
  const arr = Array(height).fill("");
  arr.map((_, i, a) => {
    i % 2 === 0
      ? (a[i] = ` ${"_|     ".repeat(width + 1).trim()}\n${"(_   _ ".repeat(
          width
        )}(_\n${lastInRaw}`)
      : (a[i] = ` ${"|_     ".repeat(width + 1).trim()}\n  ${"_) _   ".repeat(
          width
        )}_)\n${lastInRaw}`);
  });
  return `${firstLine}\n${arr.join("\n")}`;
}

/* 
Description:
You will get two Integer n(width) and m (height) and your task is to draw following pattern. 
Each line is seperated with '\n'.

Both integers are equal or greater than 1. No need to check for invalid parameters.
There are no whitespaces at the end of each line.
For example, for width = 4 and height = 3, you should draw the following pattern:

   _( )__ _( )__ _( )__ _( )__
 _|     _|     _|     _|     _|
(_   _ (_   _ (_   _ (_   _ (_
 |__( )_|__( )_|__( )_|__( )_|
 |_     |_     |_     |_     |_
  _) _   _) _   _) _   _) _   _)
 |__( )_|__( )_|__( )_|__( )_|
 _|     _|     _|     _|     _|
(_   _ (_   _ (_   _ (_   _ (_
 |__( )_|__( )_|__( )_|__( )_|


Rank: 6 kyu

Link: https://www.codewars.com/kata/5947d86e07693bcf000000c4
*/
