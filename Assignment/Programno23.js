/*
 * Filename: c:\Users\DELL\Downloads\Javascript Assignment (1)\Javascript Assignment\Programno23.js
 * Path: c:\Users\DELL\Downloads\Javascript Assignment (1)\Javascript Assignment
 * Created Date: Wednesday, October 12th 2022, 2:00:41 pm
 * Author: gayatrik29
 * 
 * Copyright (c) 2022 Your Company
 * 23) use promise with an exmple and show its resolved state and rejected state.
 */

var promise = new Promise(function(resolve,reject){
  const x="gayatri";
  const y="Gayatri";
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