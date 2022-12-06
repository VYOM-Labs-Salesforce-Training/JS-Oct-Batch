/*
 * Filename: c:\Users\DELL\Downloads\js ass\ASS_7displayDateTime.js
 * Path: c:\Users\DELL\Downloads\js ass
 * Created Date: Tuesday, December 6th 2022, 9:11:42 am
 * Author: gayatrik29
 * 7. JavaScript Program to Display Date and Time
 * Copyright (c) 2022 Your Company
 */

// get date and time
const date = new Date();

// get the date as a string
const currentDate = date.toDateString();

// get the time as a string
const currentTime = date.toLocaleTimeString();

// display date
console.log('Date: ' + currentDate);

// display time
console.log('Time: ' + currentTime);
