/*
 * Filename: c:\Users\Vrushabh Mohatkar\OneDrive\Desktop\JS-VM\reverseorder.js
 * Path: c:\Users\Vrushabh Mohatkar\OneDrive\Desktop\JS-VM
 * Created Date: Tuesday, October 11th 2022, 11:51:31 pm
 * Author: Vrushabh Mohatkar
 * Write a JavaScript code to accept number from user. Make all validation and print that
   number in reverse order.
 * Copyright (c) 2022 Your Company
 */

var num = ("Enter the number to be reveresed :", "123654 ");
var n= num;
var rev = 0, rem;
while (n>0)
{
rem = n % 10;
rev = rev * 10 + rem ;
n = Math.floor(n/10);
}
console.log("The given number is : " +num+ "The reversed number is : " +rev+ "\n");
  