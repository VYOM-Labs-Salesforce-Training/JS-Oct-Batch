/*
 * Filename: c:\Users\panch\VSCode\Assignment\JS-Oct-Batch\Assignment\Assignment06.js
 * Path: c:\Users\panch\VSCode\Assignment\JS-Oct-Batch\Assignment
 * Created Date: Wednesday, October 12th 2022, 7:33:22 pm
 * Author: Ravipanchal22
 * Question:  There are two arrays with individual values, write a JavaScript program to compute the 
sum of each individual index value from array.
 * 
 * Vyom Labs
 */

var arrayone = document.getElementById("arrayone")
var arraytwo = document.getElementById("arraytwo")
var finalresult = document.getElementById("result")


function sumArrays() {
    var firstArray = [2, 22, 7, 6, 10]
    var secondArray = [5, 7, 6, 10, 12]
    arrayone.textContent = firstArray
    arraytwo.textContent = secondArray
    const result = []
    let integer1 = 0
    let integer2 = 0

    // if(secondArray.length === 0) {
    //     return 
    // }

    while (integer1 < firstArray.length && integer1 < secondArray.length) {
        result.push(firstArray[integer1] + secondArray[integer1])
        integer1++
    }

    if (integer1 === firstArray.length) {
        for (integer2 = integer1; integer2 < secondArray.length; integer2++) {
            result.push(secondArray[integer2])
        }
    } else {
        for(integer2 = integer1; integer2 < firstArray.length; integer2++) {
            result.push(firstArray[integer2])
        }
    }
    finalresult.textContent = result
}
sumArrays()

