/*
 * Filename: c:\Users\Vrushabh Mohatkar\OneDrive\Desktop\JS-VM\uppercase.js
 * Path: c:\Users\Vrushabh Mohatkar\OneDrive\Desktop\JS-VM
 * Created Date: Tuesday, October 11th 2022, 10:59:51 pm
 * Author: Vrushabh Mohatkar
 * Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
 * Copyright (c) 2022 Vyom Labs Pvt.
 */

function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var integer1 = 0; integer1 < array1.length; integer1++){
      newarray1.push(array1[integer1].charAt(0).toUpperCase()+array1[integer1].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("My name is Vrushabh"));