/*
 * Filename: c:\Users\Vrushabh Mohatkar\OneDrive\Documents\GitHub\JS-Oct-Batch\AreaOfImprovement\promise.js
 * Path: c:\Users\Vrushabh Mohatkar\OneDrive\Documents\GitHub\JS-Oct-Batch\AreaOfImprovement
 * Created Date: Monday, October 17th 2022, 1:46:08 pm
 * Author: vrushabhmohatkar123
 * Use promise with an exmple and show its resolved state and rejected state.
 * Copyright (c) 2022 Vyom Labs Pvt.Ltd.
 */
var promise = new Promise(function(resolve, reject) {
    const number1 = 12;
    const number2 = 14;
    if(number1=== number2) {
      resolve();
    } else {
      reject();
    }
  });
     
  promise.
      then(function () {
          console.log('Success, number1 is equal to number2');
      }).
      catch(function () {
          console.log('Error,number1 is not equal to number2');
      });