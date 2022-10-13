/*
 * Filename: c:\Users\Vrushabh Mohatkar\OneDrive\Desktop\JS-VM\Assignment 2\operationonstring.js.js
 * Path: c:\Users\Vrushabh Mohatkar\OneDrive\Desktop\JS-VM\Assignment 2
 * Created Date: Tuesday, October 11th 2022, 9:55:56 pm
 * Author: vrushabhmohatkar123
 * write a java script code to apply following operations on string
 1) find occurance of substring
 2) find length of string
 3) concatenate two string
 4) reverse the string
 * Copyright (c) 2022 Vyom Labs Pvt. Ltd.
 */

//Substring
let str = "Vrushabh, Amit, Sumit";
console.log(  str.substr(-1));

//concatenate
let text1 = "Vrushabh";
let text2 = "Mohatkar";
let text3 = text1.concat(" ",text2);
console.log(text3);

//Length
let text = "ABCDEFGHIJK";
console.log(text.length);

//Reverse
// program to reverse a string

function reverseString(str) {

    
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}


const string = ('My Name is Vrushabh Mohatkar ');

const result = reverseString(string);
console.log(result);