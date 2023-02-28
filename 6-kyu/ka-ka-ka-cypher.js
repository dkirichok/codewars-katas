function kaCokadekaMe(word) {
  const vowels = ["a", "e", "i", "o", "u"];
  return (
    "ka" +
    word
      .split("")
      .map((e, i, a) => {
        if (
          vowels.includes(e.toLowerCase()) &&
          i !== a.length - 1 &&
          !vowels.includes(a[i + 1])
        ) {
          return e + "ka";
        } else {
          return e;
        }
      })
      .join("")
  );
}

/* 
Description:
Ka ka ka cypher is a cypher used by small children in some country. 
When a girl wants to pass something to the other girls and there are some boys nearby, 
she can use Ka cypher. So only the other girls are able to understand her.
She speaks using KA, ie.:
ka thi ka s ka bo ka y ka i ka s ka u ka gly what simply means this boy is ugly.
Task
Write a function that accepts a string word and returns encoded message using ka cypher.
Our rules:
The encoded word should start from ka.
The ka goes after vowel (a,e,i,o,u)
When there is multiple vowels together, the ka goes only after the last vowel
When the word is finished by a vowel, do not add the ka after

Rank: 6 kyu

Link: https://www.codewars.com/kata/5934d648d95386bc8200010b
*/
