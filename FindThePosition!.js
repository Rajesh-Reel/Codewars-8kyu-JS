/*

8 kyu 

Find the position! 

When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"

*/

function position(letter) {
    let letters = "abcdefghijklmnopqrstuvwxyz";
    return `Position of alphabet: ${letters.indexOf(letter)+1}`;
}