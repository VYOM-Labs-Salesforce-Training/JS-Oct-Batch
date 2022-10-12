/*
 * Filename: c:\Users\karan\Documents\JavaScript assignment\Javascript Assignment\Programno14 (1).js
 * Path: c:\Users\karan\Documents\JavaScript assignment\Javascript Assignment
 * Created Date: Wednesday, October 12th 2022, 2:05:16 pm
 * Author: karan
 * Write a menu driven program to perform the following options using JavaScript:
1. To find Armstrong numbers between 1 to 1000. (1st answer)
2. To print sum of the digit of a number.

 * Copyright (c) 2022 Your Company
 */

const lowNumber = parseInt(prompt('Enter a positive low integer value: '));
const highNumber = parseInt(prompt('Enter a positive high integer value: '));

console.log ('Armstrong Numbers:');

for (let i = lowNumber; i <= highNumber; i++) {

    let numberOfDigits = i.toString().length;

    let sum = 0;

    let temp = i;
    
    while (temp > 0) {

        let remainder = temp % 10;
        sum += remainder ** numberOfDigits;
       
        temp = parseInt(temp / 10); 
    }
 
    if (sum == i) {
        console.log(i);
    }
}
