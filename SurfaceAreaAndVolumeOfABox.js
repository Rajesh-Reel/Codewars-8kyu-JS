/*

8 kyu

Surface Area and Volume of a Box 

Write a function that returns the total surface area and volume of a box as an array: [area, volume]

*/

function getSize(width, height, depth) {
    return [2 * (width * height) + 2 * (height * depth) + 2 * (width * depth),
            width * height * depth];  
}