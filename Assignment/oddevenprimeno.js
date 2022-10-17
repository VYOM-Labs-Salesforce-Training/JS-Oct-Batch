/*
 * Filename: c:\Users\Vrushabh Mohatkar\OneDrive\Desktop\JS-VM\Assignment 2\oddevenprimeno.js.js
 * Path: c:\Users\Vrushabh Mohatkar\OneDrive\Desktop\JS-VM\Assignment 2
 * Created Date: Tuesday, October 11th 2022, 9:55:55 pm
 * Author: vrushabhmohatkar123
 * Write a JavaScript code for counting odd, even, prime numbers from 1 to100.
 * Copyright (c) 2022 Vyom Labs Pvt. Ltd.
 */

var integer1,flag=1,odd=0,even=0,prime=0,number=2;
while(number<=100)
{
for(integer1 = 2;integer1<number;integer1++)
{
if((number%integer1)==0)
{
flag=0;
}
}
if(flag==1)
{
prime++;
}
number++;
flag=1;
}
for(integer1=1;integer1<100;integer1++)
{
if(integer1%2==0)
{
even++;
}
else
{
odd++;
}
}
console.log("The no. of prime number between 1 to 100 are " +prime);
console.log("The no. of even number between 1 to 100 are " +even );
console.log("The no. of odd number between 1 to 100 are "+odd);