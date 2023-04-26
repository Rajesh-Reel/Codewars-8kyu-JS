/*

8 kyu 

Double Char

Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "

Good Luck!

*/

function doubleChar(str) {
    /*take in string
    double up individual char of string
    return doubled str
    */
    let split = str.split("").map(i => i.repeat(2)).join("")
    console.log(split)
    return split
}