/*
 * Filename: c:\Users\DELL\Downloads\Javascript Assignment (1)\Javascript Assignment\Programno3(1).js
 * Path: c:\Users\DELL\Downloads\Javascript Assignment (1)\Javascript Assignment
 * Created Date: Wednesday, October 12th 2022, 2:00:41 pm
 * Author: Gayu Kokate
 * 
 * Copyright (c) 2022 Your Company
 */
//Program for find occurance of substring

let myString = "Amol has 5 oranges while Amruta has only 2 oranges, Amruta gave Gayatri 1 of her orange so she is now left with only 1 Orange.";
let mySubString = "orange";

let myStringLC = myString.toLowerCase();

let count = myStringLC.split(mySubString).length - 1;
console.log(count);