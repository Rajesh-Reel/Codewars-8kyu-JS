/*

8 kyu 

Get number from string 

Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

Function:

getNumberFromString(s)

*/

function getNumberFromString(s) {
    let numAsAStr = "";
    for (let i = 0; i < s.length; i++) {
      if (s[i].match(/[0-9]/)) numAsAStr += `${s[i]}`;
    }
    return Number(numAsAStr);
}