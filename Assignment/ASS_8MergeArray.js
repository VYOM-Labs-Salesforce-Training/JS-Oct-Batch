/*
 * Filename: c:\Users\DELL\Downloads\js ass\ASS_8MergeArray.js
 * Path: c:\Users\DELL\Downloads\js ass
 * Created Date: Tuesday, December 6th 2022, 9:25:33 am
 * Author: gayatrik29
 * 8. JavaScript Program to Merge Two Arrays and Remove Duplicate
Items.
 * Copyright (c) 2022 Your Company
 */

//Declaring array
const array1 = [20,11,33];
const array2 = [11, 13, 33];

//using concat method
let mergeArray=array1.concat(array2);

console.log(mergeArray);

let duplicateArray = [];

    // loop through array
    for(let i of mergeArray) {
        if(duplicateArray.indexOf(i) === -1) {
            duplicateArray.push(i);
        }
    }
    console.log(duplicateArray); //