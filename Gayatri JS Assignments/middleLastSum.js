/*
 * Filename: c:\Users\DELL\Downloads\js ass\middle.js
 * Path: c:\Users\DELL\Downloads\js ass
 * Created Date: Friday, December 2nd 2022, 11:35:41 am
 * Author: gayatri29
 * 
 * Copyright (c) 2022 Your Company
 * 
 */
// Addition of First digit and last digit number and middle number.

//Initializing variable
var number=1236;
var temp = number, OuterSum=0, InnerSum=0; 
    
//Using while loop
    while(temp != 0)  
    {
        if(temp == number || temp < 10)  
            {
                OuterSum = OuterSum + temp % 10; 
            }
             
        else  {

            InnerSum = InnerSum + temp % 10; 
        }
        temp = temp / 10;  
  
    }
    console.log(Math.floor(OuterSum)); //7
    console.log(Math.floor(InnerSum)); //5
    