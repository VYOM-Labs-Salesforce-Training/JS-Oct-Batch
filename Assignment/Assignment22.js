/*
 * Filename: c:\Users\panch\VSCode\Assignment\JS-Oct-Batch\Assignment\Assignment22.js
 * Path: c:\Users\panch\VSCode\Assignment\JS-Oct-Batch\Assignment
 * Created Date: Thursday, October 13th 2022, 3:35:25 pm
 * Author: Ravipanchal22
 * Question: create a promise in java script to display the and display the addition of two numbers 
after 5 seconds (use Timeout).
 * 
 * Copyright (c) 2022 Your Company
 */

var variable1 = 10, variable2 = 10;

function calculateVariable() {
    setTimeout(function () {
        var result = variable1 + variable2;
        {
            console.log('Addition is shown after 5 Seconds:' + result);
        }
    }, 5000)
}

calculateVariable();