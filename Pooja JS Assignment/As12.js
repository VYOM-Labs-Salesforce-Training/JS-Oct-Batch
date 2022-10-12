/*
 * Filename: c:\Users\hp-pc\Desktop\New folder (4)\JS-Oct-Batch\Pooja JS Assignment\As12.js
 * Path: c:\Users\hp-pc\Desktop\New folder (4)\JS-Oct-Batch\Pooja JS Assignment
 * Created Date: Wednesday, October 12th 2022, 9:51:28 pm
 * Author: Pooja Parab
 * 
 * Copyright (c) 2022 Your Company
 * 
 * 11) Write a JavaScript code for calculating bills. If quantity is less than 5 then there is any discount,
If quantity is greater than 5 and less than 25 then discount is 5%, If quantity is greater than 25 and
less than 50 then discount is 15%, If quantity is greater than 50 discount is 20%.

 */


let numofqun=60,amount= 500,discount,finalbill=0;
if(numofqun<5)
{
    amount=amount;
    console.log("Your total Bill Is :",amount);
} else if(numofqun > 5 && numofqun < 25)
{   
    amount=amount*numofqun;
    discount=amount * 0.05;
    finalbill=amount-discount;
    console.log("Your total Bill Is :",amount,"and ur discount",discount,  "bill Amount",finalbill);
}else if(numofqun > 25 && numofqun < 50)
{   
    amount=amount*numofqun;
    discount=amount * 0.15;
    finalbill=amount-discount;
    console.log("Your total Bill Is :",amount,"and ur discount",discount,  "bill Amount",finalbill);
}else if(numofqun > 50)
{  
    amount=amount*numofqun;
    discount=amount * 0.20;
    finalbill=amount-discount;
    console.log("Your total Bill Is :",amount,"and ur discount",discount, "bill Amount",finalbill);
}