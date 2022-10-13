/*
 * Filename: Untitled-1
 * Path: <<projectpath>>
 * Created Date: Wednesday, October 12th 2022, 9:54:01 pm
 * Author: Pooja Parab
 * 
 * Copyright (c) 2022 Vyom Labs
 * 
 * 9) Write a JavaScript code for counting odd, even, prime numbers from 1 to100.
 * 
 */
 

var a= 5 ;
if(a % 2 == 0)
{
    console.log("even");
}else if(a % 2 != 0)
{
    console.log("odd");
}
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