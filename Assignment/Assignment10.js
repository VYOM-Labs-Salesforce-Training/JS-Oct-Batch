/*
 * Filename: c:\Users\panch\VSCode\Assignment\JS-Oct-Batch\Assignment\Assignment10.js
 * Path: c:\Users\panch\VSCode\Assignment\JS-Oct-Batch\Assignment
 * Created Date: Thursday, October 13th 2022, 12:02:58 am
 * Author: Ravipanchal22
 * Question: Write a code to greet a user with current time
 * 
 * Vyom Labs
 */

let greetMessage;
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

if (minutes < 10) {
    minutes = "0" + minutes;
}
if (seconds < 10) {
    seconds = "0" + seconds;
}
if (hours < 12) {
    greetMessage = "good morning";
} else if (hours < 17) {
    greetMessage = "good afternoon";
} else {
    greetMessage = "good evening";
}
console.log(greetMessage);
console.log(`${hours} ${minutes} ${seconds}`);