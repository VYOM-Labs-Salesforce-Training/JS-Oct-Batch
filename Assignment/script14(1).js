/*
 * Filename: c:\Users\karan\Documents\JavaScript assignment\Javascript Assignment\script14(1).js
 * Path: c:\Users\karan\Documents\JavaScript assignment\Javascript Assignment
 * Created Date: Wednesday, October 12th 2022, 2:05:16 pm
 * Author: KaranBharam27
 * Write a menu driven program to perform the following options using JavaScript:
1. To find Armstrong numbers between 1 to 1000. (1st answer)
2. To print sum of the digit of a number.
 * Copyright (c) 2022 Vyom Labs Pvt.Ltd
 */


// program to check an Armstrong number of three digits

var n;
var sum=0;
console.log('Armstrong Number is :- ');
for(i=1;i<=1000;i++)
{
j=i;
sum=0;
while(j>0)
{
r=j%10;
sum=sum+(r*r*r);
j=parseInt(j/10);
}
if( sum==i)
{
console.log(sum+',');
}
} 


//To print sum of the digit of a number.
 var value = 1234,sum = 0;

while (value) {
sum += value % 10;
value = Math.floor(value / 10);
}