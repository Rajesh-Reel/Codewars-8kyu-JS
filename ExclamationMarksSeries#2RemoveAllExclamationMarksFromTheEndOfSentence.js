/*

8 kyu 

Exclamation Marks Series #2: Remove All Exclamation Marks From The End Of Sentence

Description:
Remove all exclamation marks from the end of sentence.

Examples
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"

*/

function remove(string) {  
    let exclamation = string.length - 1;
    while (string[exclamation] === "!") {
      exclamation--;
    }
    return string.slice(0, exclamation + 1);
}