/*
 * Filename: c:\Users\DELL\Downloads\Javascript Assignment (1)\Javascript Assignment\Programno22.js
 * Path: c:\Users\DELL\Downloads\Javascript Assignment (1)\Javascript Assignment
 * Created Date: Wednesday, October 12th 2022, 2:00:41 pm
 * Author: gayatrik29
 * 
 * Copyright (c) 2022 Your Company
 * 
 * 22) create a promise in java script to display the and display the addition of two numbers after 5 seconds (use Timeout).
 */

var a=10,b=10;
function myLoop() {
setTimeout(function() {
var result=a+b;
{
console.log('Addition is :'+result);
//myLoop(result);
}
}, 5000)
}

myLoop();