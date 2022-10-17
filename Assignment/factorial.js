/*
 * Filename: c:\Users\Vrushabh Mohatkar\OneDrive\Desktop\JS-VM\factorial.js
 * Path: c:\Users\Vrushabh Mohatkar\OneDrive\Desktop\JS-VM
 * Created Date: Tuesday, October 11th 2022, 10:59:51 pm
 * Author: Vrushabh Mohatkar
 * Implement callback function for calculating factorial of a number.
 * Copyright (c) 2022 Vyom Labs Pvt. Ltd.
 */

  function factorial(number){
 
    if(number == 0 || number == 1){
        return 1;
   
    }else{
        return number * factorial(number-1);
    }
}
let number = 5;
answer = factorial(number)
console.log("The factorial of " + number + " is " + answer);