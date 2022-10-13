/*
 * Filename: c:\Users\Vrushabh Mohatkar\OneDrive\Desktop\JS-VM\Assignment 2\promise.js.js
 * Path: c:\Users\Vrushabh Mohatkar\OneDrive\Desktop\JS-VM\Assignment 2
 * Created Date: Tuesday, October 11th 2022, 9:55:58 pm
 * Author: vrushabhmohatkar123
 * Use promise with an exmple and show its resolved state and rejected state.
 * Copyright (c) 2022 Vyom Labs Pvt. Ltd.
 */

var promise = new Promise(function(resolve, reject) {
    const x = "Vrushabh";
    const y = "Amit";
    if(x === y) {
      resolve();
    } else {
      reject();
    }
  });
     
  promise.
      then(function () {
          console.log('Success');
      }).
      catch(function () {
          console.log('Some error');
      });