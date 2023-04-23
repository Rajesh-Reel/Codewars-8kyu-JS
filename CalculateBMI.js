/*

8 kyu

Calculate BMI 

Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

*/

function bmi(weight, height) {
    let hxh = height * height;
    let newBmi = weight / hxh;
    
    if(newBmi <= 18.5){
      return "Underweight";
    } else if (newBmi <= 25){
      return "Normal";
    } else if (newBmi <= 30){
      return "Overweight";
    } else {
    return "Obese";
    }
}