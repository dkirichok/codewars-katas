Map<String, int> hexToRGB(String hex) {
  var rgb = ['r', 'g', 'b'];
  var colorPairs =
      RegExp('..?').allMatches(hex.replaceAll('#', '')).map((m) => m.group(0));
  return {
    for (var item in rgb)
      item: int.parse(colorPairs.toList()[rgb.indexOf(item)]!, radix: 16)
  };
}

/* 
Description: 
When working with color values it can sometimes be useful to extract 
the individual red, green, and blue (RGB) component values for a color. 
Implement a function that meets these requirements:
Accepts a case-insensitive hexadecimal color string as its parameter 
(ex. "#FF9933" or "#ff9933")
Returns a Map<String, int> with the structure {r: 255, g: 153, b: 51} 
where r, g, and b range from 0 through 255

Rank: 5 kyu

Link: https://www.codewars.com/kata/5282b48bb70058e4c4000fa7
*/