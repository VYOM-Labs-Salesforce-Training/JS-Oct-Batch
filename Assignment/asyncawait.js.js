 /*
 * Filename: c:\Users\Vrushabh Mohatkar\OneDrive\Desktop\JS-VM\Assignment 2\asyncawait.js.js
 * Path: c:\Users\Vrushabh Mohatkar\OneDrive\Desktop\JS-VM\Assignment 2
 * Created Date: Tuesday, October 11th 2022, 9:56:44 pm
 * Author: vrushabhmohatkar123
 * write a java script code to implement async await with an exmaple.
 * Copyright (c) 2022 Vyom Labs Pvt. Ltd.
 */

// a promise
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 5000); 
});

// async function
async function asyncFunc() {

    // wait until the promise resolves 
    let result = await promise; 

    console.log(result);
    console.log('Hii');
}

// calling the async function
asyncFunc();
