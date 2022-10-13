/*
 * Filename: c:\Users\DELL\Downloads\Javascript Assignment (1)\Javascript Assignment\Programno19.js
 * Path: c:\Users\DELL\Downloads\Javascript Assignment (1)\Javascript Assignment
 * Created Date: Wednesday, October 12th 2022, 2:00:41 pm
 * Author: gayatrik29
 * 
 * Copyright (c) 2022 Your Company
 * 
 * 19) implement callback function for calculating factorial of a number.
 */

function FirstFactorial(num) { 
    var total = 1;
    var numArr = [];   
    for(var i = 1; i <= num; i++) {
            numArr.push(i);
    }   
    numArr.forEach( function( value ) {
      total *= value;
    });
    return total; 
           
  }
  console.log(FirstFactorial(5)); 