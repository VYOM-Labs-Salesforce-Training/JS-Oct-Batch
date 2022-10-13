/*
 * Filename: c:\Users\Vrushabh Mohatkar\OneDrive\Desktop\JS-VM\Assignment 2\promisetimeout.js.js
 * Path: c:\Users\Vrushabh Mohatkar\OneDrive\Desktop\JS-VM\Assignment 2
 * Created Date: Tuesday, October 11th 2022, 9:56:02 pm
 * Author: vrushabhmohatkar123
 * create a promise in java script to display the and display the addition of two numbers 
   after 5 seconds (use Timeout).
 * Copyright (c) 2022 Vyom Labs Pvt. Ltd.
 */

var promise =new Promise(function(resolve,reject)
        {
            var number1=50;
            var number2=20;
            var addition=number1+number2;
            console.log("wait 5 second to print")

            setTimeout(function()
            {
            resolve(addition);
            },5000);
        }).then(function(addition){
            console.log("Addition is "+ addition);
            
        })