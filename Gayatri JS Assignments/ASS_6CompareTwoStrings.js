/*
 * Filename: c:\Users\DELL\Downloads\js ass\CompareTwoStrings.js
 * Path: c:\Users\DELL\Downloads\js ass
 * Created Date: Tuesday, December 6th 2022, 9:07:07 am
 * Author: gayatrik29
 * 6.JavaScript Program to Compare Two Strings
 * Copyright (c) 2022 Your Company
 */

// js program to perform string comparison

const string1 = 'Gayatri Kokate';
const string2 = 'Gayatri kokate';

// compare both strings
const result = string1.toUpperCase() === string2.toUpperCase();

if(result) {
    console.log('The strings are similar.');
} else {
    console.log('The strings are not similar.');
}