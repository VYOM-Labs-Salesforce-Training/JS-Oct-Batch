/*
 * Filename: c:\Users\Vrushabh Mohatkar\OneDrive\Desktop\JS-VM\factorial.js
 * Path: c:\Users\Vrushabh Mohatkar\OneDrive\Desktop\JS-VM
 * Created Date: Tuesday, October 11th 2022, 10:59:51 pm
 * Author: Vrushabh Mohatkar
 * implement callback function for calculating factorial of a number.
 * Copyright (c) 2022 Your Company
 */

  function factorial(n){
 
    if(n == 0 || n == 1){
        return 1;
   
    }else{
        return n * factorial(n-1);
    }
}
let n = 4;
answer = factorial(n)
console.log("The factorial of " + n + " is " + answer);