/*
 * Filename: c:\Users\DELL\Downloads\Javascript Assignment (1)\Javascript Assignment\Programno1.js
 * Path: c:\Users\DELL\Downloads\Javascript Assignment (1)\Javascript Assignment
 * Created Date: Wednesday, October 12th 2022, 2:00:41 pm
 * Author: Gayu Kokate
 * 
 * Copyright (c) 2022 Your Company
 */

var eng = 98;
var java = 99;
var cpp = 70;
var Avgmarks = (eng + java + cpp)*100 / 300;

console.log("Average grade: " + Avgmarks);

if (Avgmarks < 40) {
    console.log("Grade F : Fail");
}
else if (Avgmarks< 70) {
    console.log("Grade D : Pass");
}
else if (Avgmarks < 80) {
    console.log("Grade C : second class");
}
 else if (Avgmarks < 90) {
    console.log("Grade B: First class");
} 
else if (Avgmarks <=100) {
    console.log("Grade A : distinction");
}
