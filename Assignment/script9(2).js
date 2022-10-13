/*
 * Filename: c:\Users\karan\Documents\JavaScript assignment\Javascript Assignment\script9(2).js
 * Path: c:\Users\karan\Documents\JavaScript assignment\Javascript Assignment
 * Created Date: Thursday, October 13th 2022, 2:10:35 pm
 * Author: KaranBharam27
 * 9) Write a JavaScript code for counting odd, even, prime numbers from 1 to100.
 * Copyright (c) 2022 Vyom Labs Pvt.Ltd
 */


let i =0,num =0;
var  primeNumbers = "";

       for (i = 1; i <= 100; i++)         
       { 		  	  
          let counter=0; 	  
          for(num =i; num>=1; num--)
	  {
             if(i%num==0)
	     {
 		counter = counter + 1;
	     }
	  }
	  if (counter ==2)
	  {
	     primeNumbers = primeNumbers + i + " ";
	  }	
       }	
       console.log("Prime numbers from 1 to 100 are :");
       console.log(primeNumbers);