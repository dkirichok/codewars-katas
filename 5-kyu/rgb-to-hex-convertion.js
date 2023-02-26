function rgb(r, g, b) {
  function convert(col) {
    col = col > 0 ? col : 0;
    col = col > 255 ? "FF" : col.toString(16).toUpperCase();
    return col === "0" || col.length < 2 ? "0" + col : col;
  }
  return convert(r) + convert(g) + convert(b);
}

/* 
Description: 
The rgb function is incomplete. Complete it so that passing in RGB decimal 
values will result in a hexadecimal representation being returned. 
Valid decimal values for RGB are 0 - 255. Any values that fall out of that range 
must be rounded to the closest valid value.
Note: Your answer should always be 6 characters long, the shorthand with 
3 will not work here.
The following are examples of expected output values:
rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3

Rank: 5 kyu

Link: https://www.codewars.com/kata/513e08acc600c94f01000001
*/
