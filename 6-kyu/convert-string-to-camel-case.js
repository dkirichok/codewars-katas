function toCamelCase(str) {
  let pos;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "-" || str[i] == "_") {
      pos = i + 1;
      str = str.replace(str[pos], str[pos].toUpperCase());
    }
  }
  for (let j = 0; j < str.length; j++) {
    if (str[j] == "-" || str[j] == "_") {
      str = str.replace(str[j], "");
    }
  }

  return str;
}

/* 
Description: 
Complete the method/function so that it converts dash/underscore 
delimited words into camel casing. The first word within the output should be 
capitalized only if the original word was capitalized (known as Upper Camel Case,
also often referred to as Pascal case). The next words should be always capitalized.
Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

Rank: 6 kyu

Link: https://www.codewars.com/kata/517abf86da9663f1d2000003
*/
