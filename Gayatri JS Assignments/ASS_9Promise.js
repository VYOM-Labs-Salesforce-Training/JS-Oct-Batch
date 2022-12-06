/*
 * Filename: c:\Users\DELL\Downloads\js ass\ASS_9Promise.js
 * Path: c:\Users\DELL\Downloads\js ass
 * Created Date: Friday, December 2nd 2022, 3:30:58 pm
 * Author: gayatrik29
 * 9.use promise with an example and show its resolved state and
rejected state.
 * Copyright (c) 2022 Your Company
 */
// returns a promise
var promise = new Promise(function(resolve,reject){
    const remainingLeave=1;
    const applyLeave=2;
    if(applyLeave <= remainingLeave){
        resolve();
    }else{
        reject();
    }
  });
  
  // executes when promise is resolved successfully
  promise.
        then(function (){
            console.log("Leave application apporved");
        })
        // executes if there is an error
        .catch(function (){
            console.log("Leave application rejected");
        });