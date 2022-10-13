/*
 * Filename: c:\Users\panch\VSCode\Assignment\JS-Oct-Batch\Assignment\Assignment08.js
 * Path: c:\Users\panch\VSCode\Assignment\JS-Oct-Batch\Assignment
 * Created Date: Wednesday, October 12th 2022, 8:05:15 pm
 * Author: Ravipanchal22
 * Qestion: program to get the length of  object.
 * 
 * Copyright (c) 2022 Your Company
 */
const sampleObject = {
    first: 123,
    second: 456,
    third: 789
};

console.log(Object.keys(sampleObject).length); // output: 3
console.log(Object.getOwnPropertyNames(sampleObject).length); // output: 3
