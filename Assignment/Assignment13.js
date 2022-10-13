/*
 * Filename: c:\Users\panch\VSCode\Assignment\JS-Oct-Batch\Assignment\Assignment13.js
 * Path: c:\Users\panch\VSCode\Assignment\JS-Oct-Batch\Assignment
 * Created Date: Thursday, October 13th 2022, 10:35:44 am
 * Author: Ravipanchal22
 * Question: write a program to calculate maximum, minimum, sum and average
 * 
 * Copyright (c) 2022 Vyom labs
 */

const firstArray = [10, 30, 20];
var sum = firstArray.reduce(function (a, b) {
    return a + b;
}, 0);
const average = sum / firstArray.length
console.log('Maximum Number :' + Math.max(...firstArray));
console.log('Minimum Number :' + Math.min(...firstArray));
console.log('Sum of Numbers :' + sum);
console.log('Average of Numbers :' + average);