/*
 * Filename: c:\Users\karan\Documents\JavaScript assignment\Javascript Assignment\script31.js
 * Path: c:\Users\karan\Documents\JavaScript assignment\Javascript Assignment
 * Created Date: Wednesday, October 12th 2022, 2:05:16 pm
 * Author: karan
 * 3 -1) find occurance of substring
 * Copyright (c) 2022 Vyom labs pvt.ltd
 */


let myString = "Pune is the best city";
let mySubString = "Pune";

let myStringLC = myString.toLowerCase();
let mySubStringLC = mySubString.toLowerCase();

let count = myStringLC.split(mySubStringLC).length - 1;
console.log();