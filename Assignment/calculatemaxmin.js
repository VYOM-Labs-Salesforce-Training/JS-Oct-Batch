/*
 * Filename: c:\Users\Vrushabh Mohatkar\OneDrive\Desktop\JS-VM\Assignment 2\calculatemaxmin.js
 * Path: c:\Users\Vrushabh Mohatkar\OneDrive\Desktop\JS-VM\Assignment 2
 * Created Date: Thursday, October 13th 2022, 2:20:27 pm
 * Author: vrushabhmohatkar123
 * Write a JavaScript code to calculate maximum, minimum, sum and average of numbers in an array. Make all validation.
 * Copyright (c) 2022 Vyom Labs Pvt.Ltd.
 */
const array = [20, 30, 40];
var sum=array.reduce(function(value1,value2){
return value1+value2;
},0);
var average=sum/array.length;
console.log('Maximum Number :' +Math.max(...array));
console.log('Minimum Number :' +Math.min(...array));
console.log('Sum of Numbers :' +sum);
console.log('Average of Numbers :'+average);