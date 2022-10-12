/*
 * Filename: c:\Users\panch\VSCode\Assignment\Assignment02.js
 * Path: c:\Users\panch\VSCode\Assignment
 * Created Date: Wednesday, October 12th 2022, 11:45:19 am
 * Author: Ravipanchal22
 * Question: code to design basic calculator
 * 
 *  Vyom Labs
 */
var firstValue
var secondValue
let answer = document.getElementById("answer")

// this function will add two numbers
function addition() {
    firstValue = parseInt(document.getElementById("FirstNumber").value)
    secondValue = parseInt(document.getElementById("SecondNumber").value)
    add = firstValue + secondValue
    answer.textContent = add
}

// this function will minus two numbers
function minus() {
    firstValue = parseInt(document.getElementById("FirstNumber").value)
    secondValue = parseInt(document.getElementById("SecondNumber").value)
    add = firstValue - secondValue
    answer.textContent = add
}

// this function will divide two numbers
function devide() {
    firstValue = parseInt(document.getElementById("FirstNumber").value)
    secondValue = parseInt(document.getElementById("SecondNumber").value)
    add = firstValue / secondValue
    answer.textContent = add
}

// this function will multiply two numbers
function multiply() {
    firstValue = parseInt(document.getElementById("FirstNumber").value)
    secondValue = parseInt(document.getElementById("SecondNumber").value)
    add = firstValue * secondValue
    answer.textContent = add
}