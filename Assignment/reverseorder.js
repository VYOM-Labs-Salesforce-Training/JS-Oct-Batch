/*
 * Filename: c:\Users\Vrushabh Mohatkar\OneDrive\Desktop\JS-VM\reverseorder.js
 * Path: c:\Users\Vrushabh Mohatkar\OneDrive\Desktop\JS-VM
 * Created Date: Tuesday, October 11th 2022, 11:51:31 pm
 * Author: Vrushabh Mohatkar
 * Write a JavaScript code to accept number from user. Make all validation and print that
   number in reverse order.
 * Copyright (c) 2022 Vyom Labs Pvt. Ltd.
 */

var number1 = ("Enter the number to be reveresed :", "123654 ");
var number2= number1;
var reversenumber = 0, rem;
while (number2>0)
{
rem = number2 % 10;
reversenumber = reversenumber * 10 + rem ;
number2 = Math.floor(number2/10);
}
console.log(`The given number is : ${number1} 
The reversed number is : ${reversenumber}`);
  