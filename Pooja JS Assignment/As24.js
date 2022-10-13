/*
 * Filename: c:\Users\hp-pc\Desktop\New folder (4)\JS-Oct-Batch\Pooja JS Assignment\As24.js
 * Path: c:\Users\hp-pc\Desktop\New folder (4)\JS-Oct-Batch\Pooja JS Assignment
 * Created Date: Thursday, October 13th 2022, 2:22:17 pm
 * Author: Pooja Parab
 * 
 * Copyright (c) 2022 Vyom Labs
 * 
 * 24) write a java script code to implement async await with an exmaple.
 */
async function sampleFunction() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("await promise done!"), 3000)
    });
  
    let result = await promise; // wait until the promise resolves (*)
  
    console.log(result) // "done!"
  }
  
  sampleFunction();