/*
 * Filename: Untitled-1
 * Path: <<projectpath>>
 * Created Date: Wednesday, October 12th 2022, 9:58:04 pm
 * Author: Pooja Parab
 * 
 * Copyright (c) 2022 Your Company
 7)Write a function rotate that rotates the elements of an array. All elements should be moved
one position to the left. The 0th element should be placed at the end of the array. The rotated
array should be returned.
 */

 function array_move(arr, old_index, new_index) {
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr; // for testing
};


console.log(array_move([1, 2, 3], 1, 2));
