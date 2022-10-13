/*
 * Filename: c:\Users\karan\Documents\JavaScript assignment\Javascript Assignment\Programno9.js
 * Path: c:\Users\karan\Documents\JavaScript assignment\Javascript Assignment
 * Created Date: Wednesday, October 12th 2022, 2:05:16 pm
 * Author: karan
 * Write a JavaScript code for counting odd, even, prime numbers from 1 to100.
 * Copyright (c) 2022 Your Company
 */


var i,flag=1,odd=0,even=0,prime=0,num=2;
while(num<=100)
{
for(i = 2;i<num;i++)
{
if((num%i)==0)
{
flag=0;
}
}
if(flag==1)
{
prime++;
}
num++;
flag=1;
}
for(i=1;i<100;i++)
{
if(i%2==0)
{
even++;
}
else
{
odd++;
}
}
document.write("The no. of prime number between 1 to 100 are "+prime+"")
document.write("The no. of even number between 1 to 100 are "+even+"")
document.write("The no. of odd number between 1 to 100 are "+odd+"")