/*
 * Filename: c:\Users\DELL\Downloads\Javascript Assignment (1)\Javascript Assignment\Programno7.js
 * Path: c:\Users\DELL\Downloads\Javascript Assignment (1)\Javascript Assignment
 * Created Date: Wednesday, October 12th 2022, 2:00:41 pm
 * Author: gayatrik29
 * 
 * Copyright (c) 2022 Your Company
 * 
 * 7)Write a function rotate that rotates the elements of an array. All elements should be moved one position to the left. 
 * The 0th element should be placed at the end of the array. The rotated array should be returned.
 */

function rotate(n){
       let temp=[...n]
       let left=temp.shift();
       let final=[...temp,left];
       return final
}
console.log(rotate([1,2,3,4,5,6,7,8,9,10]))