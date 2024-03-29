/*

8 kyu

Is there a vowel in there?

Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.

*/

function isVow(a) {
    for (let i = 0; i < a.length; i++) {
      let character = String.fromCharCode(a[i]);
      if ("aeiou".indexOf(character) !== -1) {
        a[i] = character;
      }
    }
    return a;
}