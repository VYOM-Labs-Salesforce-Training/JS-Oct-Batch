/*
 * Filename: c:\Users\DELL\Downloads\Javascript Assignment (1)\Javascript Assignment\Programno9.js
 * Path: c:\Users\DELL\Downloads\Javascript Assignment (1)\Javascript Assignment
 * Created Date: Wednesday, October 12th 2022, 2:00:41 pm
 * Author: gayatrik29
 * 
 * Copyright (c) 2022 Your Company
 * 
 * 9) Write a JavaScript code for counting odd, even, prime numbers from 1 to100
 */
/

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
console.log("The no. of prime number between 1 to 100 are "+prime+"")
console.log("The no. of even number between 1 to 100 are "+even+"")
console.log("The no. of odd number between 1 to 100 are "+odd+"")