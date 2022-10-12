/*
 * Filename: c:\Users\Vrushabh Mohatkar\OneDrive\Desktop\JS-VM\arrayrotate.js
 * Path: c:\Users\Vrushabh Mohatkar\OneDrive\Desktop\JS-VM
 * Created Date: Tuesday, October 11th 2022, 11:36:26 pm
 * Author: Vrushabh Mohatkar
 * Write a function rotate that rotates the elements of an array. All elements should be moved
   one position to the left. The 0th element should be placed at the end of the array. The rotated
   array should be returned
 * Copyright (c) 2022 Your Company
 */


function rotate(a){
    let inputCopy = [...a]
    let myShift = inputCopy.shift();
    let myFinalS = [...inputCopy, myShift]
    return myFinalS
  }
  
  console.log(rotate([1,2,3,8,5,4,9]))