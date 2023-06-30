/*

8 kyu 

Fake Binary

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string

*/

function fakeBin(x){
    let new0 = x.replace(/[0-4]/gi, "0");
    let new1 = new0.replace(/[5-9]/gi, "1");
    return new1;
}