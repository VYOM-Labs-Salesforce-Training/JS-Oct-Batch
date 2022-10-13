/*
 * Filename: c:\Users\panch\VSCode\Assignment\JS-Oct-Batch\Assignment\Assignment20.js
 * Path: c:\Users\panch\VSCode\Assignment\JS-Oct-Batch\Assignment
 * Created Date: Thursday, October 13th 2022, 3:07:38 pm
 * Author: Ravipanchal22
 * Question: write a java script program accept string from user and display count of vowels 
characters from the string.

 * 
 * Copyright (c) 2022 Vyom Labs
 */

function getVowels(string) {
    var Vowels = 'aAeEiIoOuU';
    var vowelsCount = 0;
    for (var i = 0; i < string.length; i++) {
        if (Vowels.indexOf(string[i]) !== -1) {
            vowelsCount += 1;
        }
    }
    return vowelsCount;
}
console.log("The Number of vowels in : " + getVowels("Hello! Good Morning"));