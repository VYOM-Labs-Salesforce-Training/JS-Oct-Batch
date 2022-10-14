/*
 * Filename: c:\Users\panch\VSCode\Assignment\JS-Oct-Batch\Assignment\Assignment05.js
 * Path: c:\Users\panch\VSCode\Assignment\JS-Oct-Batch\Assignment
 * Created Date: Wednesday, October 12th 2022, 3:24:40 pm
 * Author: Ravipanchal22
 * Question: Write a Java Script to pass string as parameter to function and search a string whether it is
present or not.
 * 
 * Copyright (c) 2022 Your Company
 */

function SearchString(str) {
    var n = str.includes("Function");
    return n;
}
let output = document.getElementById("output")
// Function call 
console.log(SearchString("Function has string value"))
output.textContent = SearchString("Function has string value")