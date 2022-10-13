/*
 * Filename: c:\Users\karan\Documents\JavaScript assignment\Javascript Assignment\script4.js
 * Path: c:\Users\karan\Documents\JavaScript assignment\Javascript Assignment
 * Created Date: Wednesday, October 12th 2022, 2:05:16 pm
 * Author: KaranBharam27
 * program to convert first letter of a string to uppercase

 * Copyright (c) 2022 Vyom Labs Pvt.Ltd
 */

function capitalizeFirstLetter(str) {
        strArr = str.split(" ");
        newStr = "";
        for (var i = 0; i < strArr.length; i++) {
            newStr += strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1) + " ";
        }
        return newStr;
    }
    str = "hello everyone my name is karan. i am a certified salesfroce administrator.";
    console.log(capitalizeFirstLetter(str));