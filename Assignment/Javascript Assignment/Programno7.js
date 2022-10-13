/*
 * Filename: c:\Users\karan\Documents\JavaScript assignment\Javascript Assignment\Programno7.js
 * Path: c:\Users\karan\Documents\JavaScript assignment\Javascript Assignment
 * Created Date: Wednesday, October 12th 2022, 2:05:16 pm
 * Author: karan
 * 7)Write a function rotate that rotates the elements of an array. All elements should be moved
one position to the left. The 0th element should be placed at the end of the array. The rotated
array should be returned.
 * Copyright (c) 2022 Your Company
 */


function rotateLeftByOne(arr) {
        let lastElement = arr[0];
        for (let i = 0; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1];
        }
        arr[arr.length - 1] = lastElement;
        console.log(arr);
    }
    arr = [10, 20, 30, 40, 50, 60];
    rotateLeftByOne(arr);