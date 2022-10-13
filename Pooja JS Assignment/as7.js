/*
 * Filename: Untitled-1
 * Path: <<projectpath>>
 * Created Date: Wednesday, October 12th 2022, 9:58:04 pm
 * Author: Pooja Parab
 * 
 * Copyright (c) 2022 Vyom Labs
 7)Write a function rotate that rotates the elements of an array. All elements should be moved
one position to the left. The 0th element should be placed at the end of the array. The rotated
array should be returned.
 */

const array1 =['Pooja','Rina','Tina','Sita'];

array1.push(array1.shift());

console.log("Array is "+array1);
