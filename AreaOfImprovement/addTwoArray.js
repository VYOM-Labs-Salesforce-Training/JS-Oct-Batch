/*
 * Filename: c:\Users\Vrushabh Mohatkar\OneDrive\Documents\GitHub\JS-Oct-Batch\AreaOfImprovement\addTwoArray.js
 * Path: c:\Users\Vrushabh Mohatkar\OneDrive\Documents\GitHub\JS-Oct-Batch\AreaOfImprovement
 * Created Date: Monday, October 17th 2022, 1:55:22 pm
 * Author: vrushabhmohatkar123
 * Write a JS Program for adding 2 arrays and do the sum.
 * Copyright (c) 2022 Vyom Labs Pvt. Ltd.
 */
 var array1=[7,1,3,5,4];
 var array2=[3,2,1,4,6];
  var result = [];
  var ctr = 0;
 


 while (ctr < array1.length && ctr < array2.length) 
  {
    result.push(array1[ctr] + array2[ctr]);
    ctr++;
  }

  console.log(result);

