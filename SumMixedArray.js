/*

8 kyu 

Sum Mixed Array

Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

*/

function sumMix(x){
    let numSum = 0, otherSum = 0;
    for(let i = 0; i < x.length; i++){
      if (typeof x[i] === "number") {
        numSum += x[i];
      } else {
        otherSum += Number(x[i]);
      }
    }
    return numSum+otherSum;
}