/*
 * Filename: c:\Users\karan\Documents\JavaScript assignment\Javascript Assignment\script14(2).js
 * Path: c:\Users\karan\Documents\JavaScript assignment\Javascript Assignment
 * Created Date: Wednesday, October 12th 2022, 2:05:16 pm
 * Author: KaranBharam27
 * Write a menu driven program to perform the following options using JavaScript:
1. To find Armstrong numbers between 1 to 1000. 
2. To print sum of the digit of a number.(2nd answer)
 * Copyright (c) 2022 Vyom Labs Pvt.Ltd
 */


const findSum = (num) => {
    if(num < 10){
       return num;
    }
    const lastDigit = num % 10;
    const remainingNum = Math.floor(num / 10);
    return findSum(lastDigit + findSum(remainingNum));
 }
 console.log(findSum(2568));
 