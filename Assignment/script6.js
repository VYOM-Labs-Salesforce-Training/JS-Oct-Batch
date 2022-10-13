/*
 * Filename: c:\Users\karan\Documents\JavaScript assignment\Javascript Assignment\script6.js
 * Path: c:\Users\karan\Documents\JavaScript assignment\Javascript Assignment
 * Created Date: Wednesday, October 12th 2022, 2:05:16 pm
 * Author: KaranBharam27
 * 6) There are two arrays with individual values, write a JavaScript program to compute the
sum of each individual index value from array.
 * Copyright (c) 2022 Vyom Labs Pvt.Ltd
 */


arr1 = [10, 20, 30, 40, 50, 60, 70];
    arr2 = [100, 200, 300, 400, 500, 600, 700];
    let totalOfBothArray = sumOfArr1 = sumOfArr2 = 0;
    
    for (let i = 0; i < arr1.length; i++) {
        sumOfArr1 += arr1[i];
        sumOfArr2 += arr2[i];
        totalOfBothArray += arr1[i] + arr2[i];
    }
    console.log(sumOfArr1, sumOfArr2, totalOfBothArray);