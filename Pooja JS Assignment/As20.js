/*
 * Filename: c:\Users\hp-pc\Desktop\New folder (4)\JS-Oct-Batch\Pooja JS Assignment\As20.js
 * Path: c:\Users\hp-pc\Desktop\New folder (4)\JS-Oct-Batch\Pooja JS Assignment
 * Created Date: Thursday, October 13th 2022, 11:51:52 am
 * Author: Pooja Parab
 * 
 * Copyright (c) 2022 Vyom Labs
 * 
 * 20) write a java script program accept string from user and display count of vowels
characters from the string.
 */


function getVowels(string) {
    var Vowels = 'aAeEiIoOuU';
    var vowelsCount = 0;
    for(var i = 0; i < string.length ; i++) {
    if (Vowels.indexOf(string[i]) !== -1) {
    vowelsCount += 1;
    }
    }
    return vowelsCount;
    }
    console.log("The Number of vowels in : "+getVowels("Education is good to us"));