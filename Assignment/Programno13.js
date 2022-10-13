/*
 * Filename: c:\Users\DELL\Downloads\Javascript Assignment (1)\Javascript Assignment\Programno13.js
 * Path: c:\Users\DELL\Downloads\Javascript Assignment (1)\Javascript Assignment
 * Created Date: Wednesday, October 12th 2022, 2:00:41 pm
 * Author: gayatrik29
 * 
 * Copyright (c) 2022 Your Company
 */

/*
13) Write a JavaScript code to calculate maximum, minimum, sum and average of numbers in an array. 
Make all validation.
*/
const array1 = [10, 30, 20];
var sum=array1.reduce(function(a,b){
return a+b;
},0);
var avg=sum/array1.length;
console.log('Maximum Number :' +Math.max(...array1));
console.log('Minimum Number :' +Math.min(...array1));
console.log('Sum of Numbers :' +sum);
console.log('Average of Numbers :'+avg);