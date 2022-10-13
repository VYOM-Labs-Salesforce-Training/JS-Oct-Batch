/*
 * Filename: c:\Users\karan\Documents\JavaScript assignment\Javascript Assignment\script22.js
 * Path: c:\Users\karan\Documents\JavaScript assignment\Javascript Assignment
 * Created Date: Wednesday, October 12th 2022, 11:42:50 pm
 * Author: KaranBharam27
 * create a promise in java script to display the and display the addition of two numbers after 5 seconds (use Timeout).
 * Copyright (c) 2022 Vyom Labs Pvt.Ltd
 */


const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

let chain = Promise.resolve();
for (let count = 25; count >= 5; --count) {
  chain = chain.then(() => {
    console.log(count);
    return wait(5000);
  });
}
