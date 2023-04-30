/*

8 kyu

Remove exclamation marks

Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

*/

function removeExclamationMarks(s) {
    let newS = s.replace(/!/g, "");
    return newS;
}