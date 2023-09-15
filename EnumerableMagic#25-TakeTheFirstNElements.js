/*

8 kyu 

Enumerable Magic #25 - Take the First N Elements

Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

*/

function take(arr, n) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (i < n) {
        result.push(arr[i]);
      }
    }
    return result;
}