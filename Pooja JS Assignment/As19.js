/*
 * Filename: c:\Users\hp-pc\Desktop\New folder (4)\JS-Oct-Batch\Pooja JS Assignment\As19.js
 * Path: c:\Users\hp-pc\Desktop\New folder (4)\JS-Oct-Batch\Pooja JS Assignment
 * Created Date: Thursday, October 13th 2022, 11:48:01 am
 * Author: Pooja Parab
 * 
 * Copyright (c) 2022 Vyom Labs
 * 
 * 19) implement callback function for calculating factorial of a number.
 * 
 */


function factorial(num) {
    if (num === 0 || num === 1)
    return 1;
    for (var i = num - 1; i >= 1; i--) {
    num *= i;
    }
    return num;
    }
    console.log(factorial(7));