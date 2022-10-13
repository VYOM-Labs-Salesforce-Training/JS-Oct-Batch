/*
 * Filename: c:\Users\panch\VSCode\Assignment\JS-Oct-Batch\Assignment\Assignment23.js
 * Path: c:\Users\panch\VSCode\Assignment\JS-Oct-Batch\Assignment
 * Created Date: Thursday, October 13th 2022, 3:36:06 pm
 * Author: Ravipanchal22
 * Question;  use promise with an exmple and show its resolved state and rejected state
 * 
 * Copyright (c) 2022 Your Company
 */


var promise = new Promise(function (resolve, reject) {
    const first = "stringfirst";
    const second = "stringfirst";
    if (first === second) {
        resolve();
    } else {
        reject();
    }
});

promise.
    then(function () {
        console.log("Promise is Successful");
    }).
    catch(function () {
        console.log("Promise is rejected");
    });