/*
 * Filename: c:\Users\hp-pc\Desktop\New folder (4)\JS-Oct-Batch\Pooja JS Assignment\As3.js
 * Path: c:\Users\hp-pc\Desktop\New folder (4)\JS-Oct-Batch\Pooja JS Assignment
 * Created Date: Thursday, October 13th 2022, 10:15:43 am
 * Author: Pooja Parab
 * 
 * Copyright (c) 2022 Vyom Labs
 * 3) write a java script code to apply following operations on string
        1) find occurance of substring
        2) find length of string
        3) concatenate two string
        4) reverse the string

 */

function count(main_str, sub_str) 
    {
    main_str += '';
    sub_str += '';

    if (sub_str.length <= 0) 
    {
        return main_str.length + 1;
    }

       subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
       return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
    }
 
console.log(count("Pooja is learning Salesforce . She is very happy to join vyom", 'is'));

var str = "Pooja Parab";
var n = str.length;
console.log("Length of String-->" + n);

var str1 = "Pooja ";
var str2 = "Parab";
var res = str1.concat(str2);
console.log("concatenate two String-->" + res);

// Function to reverse string
function ReverseString(str) {
    return str.split('').reverse().join('')
 }
       
 // Function call 
 console.log(ReverseString("Pooja Parab"))