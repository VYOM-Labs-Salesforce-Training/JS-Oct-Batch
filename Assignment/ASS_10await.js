/*
 * Filename: c:\Users\DELL\Downloads\js ass\await.js
 * Path: c:\Users\DELL\Downloads\js ass
 * Created Date: Sunday, December 4th 2022, 9:16:57 am
 * Author: gayatrik29
 * 10.write a java script code to implement async await with an
example.
 * Copyright (c) 2022 Your Company
 */

let promise=new Promise(function(resolve,reject){
    setTimeout(function(){
    resolve("Hello")},3000);
});
async function demo(){
    let result=await promise;
    console.log(result);
    console.log("Gayatri");
}
demo();