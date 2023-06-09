/*

8 kyu 

Exclamation marks series #1: Remove an exclamation mark from the end of string

Description:
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
remove("Hi!") == "Hi"
remove("Hi!!!") == "Hi!!"
remove("!Hi") == "!Hi"
remove("!Hi!") == "!Hi"
remove("Hi! Hi!") == "Hi! Hi"
remove("Hi") == "Hi"

*/

function remove (string) {
    //for loop version
  //   for (let i = 0; i < string.length; i++) {
  //     if (string[string.length-1] == "!") {
  //       return string.slice(0, string.length-1);
  //     } else {
  //       return string;
  //     }
  //   }
    //ternary operator version
    return string[string.length-1] == "!" ? string.slice(0, string.length-1) : string;
}