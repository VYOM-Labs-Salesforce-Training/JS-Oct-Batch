/*
 * Filename: c:\Users\karan\Documents\JavaScript assignment\Javascript Assignment\Programno13.js
 * Path: c:\Users\karan\Documents\JavaScript assignment\Javascript Assignment
 * Created Date: Wednesday, October 12th 2022, 2:05:16 pm
 * Author: karan
 * Write a JavaScript code to calculate maximum, minimum, sum and average of numbers in an
array. Make all validation.
 * Copyright (c) 2022 Your Company
 */


const arrMin = arr => Math.min(...arr);
// arrMin([20, 10, 5, 10]) -> 5

const arrMax = arr => Math.max(...arr);
// arrMax([20, 10, 5, 10]) -> 20

const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length
// arrAvg([20, 10, 5, 10]) -> 11.25