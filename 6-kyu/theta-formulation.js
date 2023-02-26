function thetaFormula(radius, arc, angle) {
  const arr = [
    !radius ? false : radius,
    !arc ? false : arc,
    !angle ? false : angle,
  ].filter((e) => e);
  if (arr.length < 3 || arr.every((e) => e === "?")) {
    return null;
  } else if (arr.length === 3 && arr.some((e) => e === "?")) {
    if (arr.filter((e) => e === "?").length === 2) {
      return null;
    } else {
      const qIndex = arr.indexOf("?");
      return qIndex === 0
        ? Math.round((arc / angle) * 1000) / 1000
        : qIndex === 1
        ? Math.round(radius * angle * 1000) / 1000
        : qIndex === 2
        ? Math.round((arc / radius) * 1000) / 1000
        : null;
    }
  } else if (
    arr.length === 3 &&
    arr.every((e) => e !== "?" && typeof e === "number")
  ) {
    return angle === arc / radius;
  } else {
    return null;
  }
}

/* 
Description: 
There were days in math class when I wished I had a simple way to quickly 
solve for any given variable in a formula and check my answers accordingly. 
If only I had a time machine...
Oh well! Anyhow, using the following formula:
Angle (in Radians) === Arc length / Radius length
Write a function thetaFormula:
When given two of the values and "?" returns the number value of the missing one.
When given all three values returns a boolean value verifying if the statement is true or false.
When given one or no values as arguments or invalid arguments returns null.
thetaFormula("?", 12, 35)        -->    0.343
thetaFormula(3, "?", 14)         -->    42
thetaFormula(5, 16, "?")         -->    3.2

Rank: 6 kyu

Link: https://www.codewars.com/kata/567610d21541a88876000024
*/
