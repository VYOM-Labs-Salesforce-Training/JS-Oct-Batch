/*
 * Filename: c:\Users\panch\VSCode\Assignment\JS-Oct-Batch\Assignment\Assignment09.js
 * Path: c:\Users\panch\VSCode\Assignment\JS-Oct-Batch\Assignment
 * Created Date: Wednesday, October 12th 2022, 8:05:39 pm
 * Author: Ravipanchal22
 * Question: code for counting odd, even, prime numbers from 1 to100.
 * 
 * Copyright (c) 2022 Your Company
 */

var flag = 1
let oddNumber = 0
let evenNumber = 0
let primeNumber = 0
let number = 2;

while (number <= 100) {
    for (let i = 2; i < number; i++) {
        if ((number % i) == 0) {
            flag = 0;
        }
    }
    // this will print all the primenumber
    if (flag == 1) {
        primeNumber++;
    }
    number++;
    flag = 1;
}
for (i = 1; i < 100; i++) {
    //if number id divisible by 2 then it is even and others are odd
    if (i % 2 == 0) {
        // this will print all the evennumber 
        evenNumber++;
    }
    else {
        // this will print all the primenumber
        oddNumber++;
    }
}
console.log(primeNumber)
console.log(evenNumber)
console.log(oddNumber)