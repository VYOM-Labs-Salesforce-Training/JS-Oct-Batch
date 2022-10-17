/*
 * Filename: c:\Users\Vrushabh Mohatkar\OneDrive\Desktop\JS-VM\Assignment 2\greet.js.js
 * Path: c:\Users\Vrushabh Mohatkar\OneDrive\Desktop\JS-VM\Assignment 2
 * Created Date: Tuesday, October 11th 2022, 9:56:22 pm
 * Author: vrushabhmohatkar123
 * Write a JavaScript code which will greet according to the current timing.
 * Copyright (c) 2022 Vyom Labs Pvt. Ltd.
 */

var hours = new Date().getHours();
var minute =new Date().getMinutes();
var second =new Date().getSeconds();

console.log("Time is " + hours+":"+minute+":"+second );
if(hours < 4)
    console.log("Hey, Good night");
else if(hours < 12)
    console.log("Hello, Good morning");
else if(hours < 17)
    console.log("Hello, Good afternoon");
else 
    console.log("Hello, Good evening");