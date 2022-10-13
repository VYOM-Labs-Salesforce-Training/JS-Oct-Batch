/*
 * Filename: c:\Users\panch\Downloads\Programno24.js
 * Path: c:\Users\panch\Downloads
 * Created Date: Wednesday, October 12th 2022, 10:42:33 pm
 * Author: Ravipanchal22
 * Questions:implement async await 
 * 
 * Copyright (c) 2022 Vyom Labs
 */
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // this will Print promise resolved after 3 seconds
        resolve('Promise resolved')
    }, 3000);
});

// async function
async function asyncFunction() {
    let result = await promise;
    console.log(result);
}
// calling the function 
asyncFunction();
