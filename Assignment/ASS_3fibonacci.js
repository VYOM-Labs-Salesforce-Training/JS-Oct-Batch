/*
 * Filename: c:\Users\DELL\Downloads\js ass\fibo.js
 * Path: c:\Users\DELL\Downloads\js ass
 * Created Date: Thursday, December 1st 2022, 12:30:22 pm
 * Author: gayatrik29
 * 3. JavaScript Program to Print the Fibonacci Sequence
 * Copyright (c) 2022 Your Company
 */
//Initializing variable
var number=10;
var n1=0,n2=1;
//using for loop
for(let i=0;i<number;i++){
    console.log(n1);
    let n3=n1+n2;
    n1=n2;
    n2=n3;
}