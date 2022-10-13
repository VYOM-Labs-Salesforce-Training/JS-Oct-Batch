/*
 * Filename: c:\Users\karan\Documents\JavaScript assignment\Javascript Assignment\script24.js
 * Path: c:\Users\karan\Documents\JavaScript assignment\Javascript Assignment
 * Created Date: Wednesday, October 12th 2022, 11:42:50 pm
 * Author: KaranBharam27
 * 24)write a java script code to implement async await with an exmaple
 * Copyright (c) 2022 Vyom Labs Pvt.Ltd
 */


// a promise
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 4000); 
});

// async function
async function asyncFunc() {

    // wait until the promise resolves 
    let result = await promise; 

    console.log(result);
    console.log('Hello I am SalesForce Developer');
}

// calling the async function
asyncFunc();
