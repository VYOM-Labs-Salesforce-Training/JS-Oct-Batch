/*
 * Filename: c:\Users\hp-pc\Desktop\New folder (4)\JS-Oct-Batch\Pooja JS Assignment\As22.js
 * Path: c:\Users\hp-pc\Desktop\New folder (4)\JS-Oct-Batch\Pooja JS Assignment
 * Created Date: Thursday, October 13th 2022, 1:59:33 pm
 * Author: Pooja Parab
 * 
 * Copyright (c) 2022 Vyom Labs
 * 
 * create a promise in java script to display the and display the addition of two numbers
after 5 seconds (use Timeout).

 */
var Number1=20;
var Number2=20;
var Sum = Number1+Number2 ;
var promise = new Promise(function(resolve,reject){
    setTimeout(function(){
        
        console.log('Addition is executed after 5 sec '+Sum);
      }, 5000);//timer is 5 sec
});
