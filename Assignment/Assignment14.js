/*
 * Filename: c:\Users\panch\VSCode\Assignment\JS-Oct-Batch\Assignment\Assignment14.js
 * Path: c:\Users\panch\VSCode\Assignment\JS-Oct-Batch\Assignment
 * Created Date: Thursday, October 13th 2022, 11:43:25 am
 * Author: Ravipanchal22
 * Question: this function will give the armstrong numbers between 1 to 1000 and print the sum of digit numbers
 * 
 * Copyright (c) 2022 Vyom Labs
 */

var sum = 0;

for (integer1 = 0; integer1 <= 1000; integer1++) {
    integer2 = integer1;
    sum = 0;
    while (integer2 > 0) {
        r = integer2 % 10;
        sum = sum + (r * r * r);
        integer2 = parseInt(integer2 / 10);
    }
    if (sum == integer1) {
        console.log('Armstrong Number:- ' + sum);
    }
}


//this will print sum of each digit of a number.
var value = 123
var sum = value
var finalvalue = 0

while (sum != 0) {
    finalvalue += sum % 10
    sum = Math.floor(sum / 10)
}
console.log(finalvalue)
