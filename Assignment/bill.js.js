/*
 * Filename: c:\Users\Vrushabh Mohatkar\OneDrive\Desktop\JS-VM\Assignment 2\bill.js.js
 * Path: c:\Users\Vrushabh Mohatkar\OneDrive\Desktop\JS-VM\Assignment 2
 * Created Date: Tuesday, October 11th 2022, 9:56:40 pm
 * Author: vrushabhmohatkar123
 * Write a JavaScript code for calculating bills. If quantity is less than 5 then there is any discount, 
   If quantity is greater than 5 and less than 25 then discount is 5%, If quantity is greater than 25 and 
   less than 50 then discount is 15%, If quantity is greater than 50 discount is 20%.
 * Copyright (c) 2022 Vyom Labs Pvt. Ltd. 
 */

var quntity = parseInt("6");
        var price = parseInt("25");
        if (quntity < 5) {
            discount = 2;
            var bill = (price * quntity) - (discount / 100) * 100;
            console.log("Total bill of 2% discount is " + bill);
        }
        else if (quntity >= 5 && quntity < 25) {
            discount = 5;
            var bill = (price * quntity) - (discount / 100) * 100;
            console.log("Total bill of 5% discount is " + bill);
        }
        else if (quntity > 25 && quntity < 50) {
            discount = 15;
            var bill = (price * quntity) - (discount / 100) * 100;
            console.log("Total bill of 15% discount is " + bill2);
        }
        else if (quntity > 50) {
            discount = 20;
            var bill = (price * quntity) - (discount / 100) * 100;
            console.log("Total bill of 20% discount is " + bill);
        }