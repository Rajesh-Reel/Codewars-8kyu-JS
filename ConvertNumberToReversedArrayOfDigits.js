/*

8 kyu

Convert number to reversed array of digits

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]

*/

function digitize(n) {
    let numbers = n.toString()//convert n to a string
    let arrayNum = numbers.split('') //split the string and make an array
    let arrayRev = arrayNum.reverse()//reverse the new array made.
    let newArr = arrayRev.map(Number)
    return newArr;
}