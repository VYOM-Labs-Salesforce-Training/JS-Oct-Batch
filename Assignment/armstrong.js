/*
 * Filename: c:\Users\Vrushabh Mohatkar\OneDrive\Desktop\JS-VM\Assignment 2\armstrong.js
 * Path: c:\Users\Vrushabh Mohatkar\OneDrive\Desktop\JS-VM\Assignment 2
 * Created Date: Thursday, October 13th 2022, 2:23:56 pm
 * Author: vrushabhmohatkar123
 * Write a menu driven program to perform the following options using JavaScript:
	1. To find Armstrong numbers between 1 to 1000.
    2. To print sum of the digit of a number.
 * Copyright (c) 2022 Vyom Labs Pvt. Ltd.
 */
var n;
var sum = 0;

for (i = 0; i <= 1000; i++) {
    j = i;
    sum = 0;
    while (j > 0) {
        r = j % 10;
        sum = sum + (r*r*r);
        j = parseInt(j / 10);
    }
    if (sum == i) {
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