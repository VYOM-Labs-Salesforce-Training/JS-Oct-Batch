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
            var x=50;
            var y=20;
            var z=x+y;
            console.log("wait 5 second to print")

            setTimeout(function()
            {
            resolve(z);
            },5000);
        }).then(function(z){
            console.log("Addition is "+ z);
            
        })