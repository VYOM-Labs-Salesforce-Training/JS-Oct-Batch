/*
 * Filename: c:\Users\hp-pc\Desktop\New folder (4)\JS-Oct-Batch\Pooja JS Assignment\As14.js
 * Path: c:\Users\hp-pc\Desktop\New folder (4)\JS-Oct-Batch\Pooja JS Assignment
 * Created Date: Wednesday, October 12th 2022, 9:47:35 pm
 * Author: Pooja Parab
 * 
 * Copyright (c) 2022 Your Company
 * 
 * 14) Write a menu driven program to perform the following options using JavaScript:
1. To find Armstrong numbers between 1 to 1000.
2. To print sum of the digit of a number.
 */
var n;
var sum=0;
console.log('Armstrong Number :- ');
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