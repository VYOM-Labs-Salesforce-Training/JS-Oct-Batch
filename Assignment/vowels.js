/*
 * Filename: c:\Users\Vrushabh Mohatkar\OneDrive\Desktop\JS-VM\Assignment 2\vowels.js.js
 * Path: c:\Users\Vrushabh Mohatkar\OneDrive\Desktop\JS-VM\Assignment 2
 * Created Date: Tuesday, October 11th 2022, 9:56:13 pm
 * Author: vrushabhmohatkar123
 * Write a java script program accept string from user and display count of vowels 
   characters from the string.
 * Copyright (c) 2022 Vyom Labs Pvt. Ltd.
 */

function vowel_count(string1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var integer1 = 0; integer1 < string1.length ; integer1++)
  {
    if (vowel_list.indexOf(string1[integer1]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowel_count("My Name Is Vrushabh Mohatkar "));
