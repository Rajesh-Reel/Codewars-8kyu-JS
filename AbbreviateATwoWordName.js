/*

8 kyu

Abbreviate a Two Word Name

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

*/

function abbrevName(name){

    // code away
//  let newName = name.split("").charAt.join("");
//   console.log(newName)
  
//  let firstInitial = name[0];
//   let dot = "."
//  console.log(firstInitial+dot)
  
  let newName = name.split(" ").map(name => name[0].toUpperCase())
  console.log(newName)
  let dot =".";
  console.log("hopefully the correct answer", newName[0]+dot+newName[1])
  return newName[0]+dot+newName[1]
}