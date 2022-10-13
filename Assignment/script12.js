/*
 * Filename: c:\Users\karan\Documents\JavaScript assignment\Javascript Assignment\script12.js
 * Path: c:\Users\karan\Documents\JavaScript assignment\Javascript Assignment
 * Created Date: Wednesday, October 12th 2022, 2:05:16 pm
 * Author: KaranBharam27
 * 12) Write a JavaScript code to accept number from user. Make all validation and print that
number in reverse order.
 * Copyright (c) 2022 Vyom Labs Pvt.Ltd
 */


let rev = 0;
let num = 123456;
let lastDigit;

while(num != 0){
	lastDigit = num % 10;
  rev = rev * 10 + lastDigit;
  num = Math.floor(num/10);
}

console.log("Reverse number : "+rev);
