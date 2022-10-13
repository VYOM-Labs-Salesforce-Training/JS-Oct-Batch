/*
 * Filename: c:\Users\karan\Documents\JavaScript assignment\Javascript Assignment\script13.js
 * Path: c:\Users\karan\Documents\JavaScript assignment\Javascript Assignment
 * Created Date: Wednesday, October 12th 2022, 2:05:16 pm
 * Author: KaranBharam27
 * 3) Write a JavaScript code to calculate maximum, minimum, sum and average of numbers in an array. Make all validation.
 * Copyright (c) 2022 Vyom Labs Pvt.Ltd
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
