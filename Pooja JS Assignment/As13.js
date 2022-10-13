/*
 * Filename: c:\Users\hp-pc\Desktop\New folder (4)\JS-Oct-Batch\Pooja JS Assignment\As13.js
 * Path: c:\Users\hp-pc\Desktop\New folder (4)\JS-Oct-Batch\Pooja JS Assignment
 * Created Date: Wednesday, October 12th 2022, 9:47:35 pm
 * Author: Pooja Parab
 * 
 * Copyright (c) 2022 Vyom Labs
 * 13) Write a JavaScript code to calculate maximum, minimum, sum and average of numbers in an
array. Make all validation.
 */
const array1 = [10, 30, 20,70];
var sum=array1.reduce(function(a,b){
return a+b;
},0); 
var avg=sum/array1.length;
console.log('Maximum Number :' +Math.max(...array1));
console.log('Minimum Number :' +Math.min(...array1));
console.log('Sum of Numbers :' +sum);
console.log('Average of Numbers :'+avg);