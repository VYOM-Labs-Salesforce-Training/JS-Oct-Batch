/*
 * Filename: c:\Users\Vrushabh Mohatkar\OneDrive\Desktop\JS-VM\Assignment 2\calculator.js.js
 * Path: c:\Users\Vrushabh Mohatkar\OneDrive\Desktop\JS-VM\Assignment 2
 * Created Date: Thursday, October 13th 2022, 12:36:58 pm
 * Author: vrushabhmohatkar123
 * Write a java script code to design basic functionality of calculator.
 * Copyright (c) 2022 Vyom Labs Pvt. Ltd.
 */

var firstValue
var secondValue
let answer = document.getElementById("answer")

// this function will add two numbers
function addition() {
    firstValue = parseInt(document.getElementById("FirstNumber").value)
    secondValue = parseInt(document.getElementById("SecondNumber").value)
    add = firstValue + secondValue
    Total.textContent = add
}

// this function will subtract two numbers
function subtract() {
    firstValue = parseInt(document.getElementById("FirstNumber").value)
    secondValue = parseInt(document.getElementById("SecondNumber").value)
    add = firstValue - secondValue
    Total.textContent = add
}

// this function will divide two numbers
function divide() {
    firstValue = parseInt(document.getElementById("FirstNumber").value)
    secondValue = parseInt(document.getElementById("SecondNumber").value)
    add = firstValue / secondValue
    Total.textContent = add
}

// this function will multiply two numbers
function multiply() {
    firstValue = parseInt(document.getElementById("FirstNumber").value)
    secondValue = parseInt(document.getElementById("SecondNumber").value)
    add = firstValue * secondValue
    Total.textContent = add
}