/*
 * Filename: c:\Users\hp-pc\Desktop\New folder (4)\JS-Oct-Batch\Pooja JS Assignment\As23.js
 * Path: c:\Users\hp-pc\Desktop\New folder (4)\JS-Oct-Batch\Pooja JS Assignment
 * Created Date: Thursday, October 13th 2022, 2:07:27 pm
 * Author: Pooja Parab
 * 
 * Copyright (c) 2022 Vyom Labs
 * 
 * 23) use promise with an exmple and show its resolved state and rejected state.
 * 
 */
var promise = new Promise(function(resolve,reject){
    const x="Shraddha";
    const y="ShradDha";
    if(x === y){ //x and y not equal
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
