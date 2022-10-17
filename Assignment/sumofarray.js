/*
 * Filename: c:\Users\Vrushabh Mohatkar\OneDrive\Desktop\JS-VM\sumofarray.js
 * Path: c:\Users\Vrushabh Mohatkar\OneDrive\Desktop\JS-VM
 * Created Date: Wednesday, October 12th 2022, 1:54:58 pm
 * Author: Vrushabh Mohatkar
 * There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from array.
 * Copyright (c) 2022 Vyom Labs Pvt. Ltd.
 */

function Arrays_sum(array1, array2) 
{
  var result = [];
  var integer2 = 0;
  var integer1=0;

  if (array1.length === 0) 
   return "array1 is empty";
  if (array2.length === 0) 
   return "array2 is empty";   

 while (integer2 < array1.length && integer2 < array2.length) 
  {
    result.push(array1[integer2] + array2[integer2]);
    integer2++;
  }

 if (integer2 === array1.length) 
 {
    for (integer1 = integer2; integer1 < array2.length; integer1++)   {
      result.push(array2[integer1]);
    }
  } 
  else
  {
  for (integer1 = integer2; integer1 < array1.length; integer1++) 
    {
      result.push(array1[integer1]);
    }
  }
  return result;
}

console.log(Arrays_sum([1,0,2,3,4], [1,2,3,6,5,4,]));
