/*
 * Filename: c:\Users\karan\Documents\JavaScript assignment\Javascript Assignment\script23.js
 * Path: c:\Users\karan\Documents\JavaScript assignment\Javascript Assignment
 * Created Date: Wednesday, October 12th 2022, 11:42:50 pm
 * Author: KaranBharam27
 * 23) use promise with an exmple and show its resolved state and rejected state
 * Copyright (c) 2022 Vyom Labs Pvt.Ltd
 */


var promise = new Promise(function(resolve,reject){
  const x="Karan";
  const y="Karan";
  if(x === y){
      resolve();
  }else{
      reject();
  }
});

promise.
      then(function (){
          console.log("success");
      }).
      catch(function (){
          console.log("reject");
      });
