/*
Filename: c:\Users\panch\VSCode\Assignment\Assignment03.html
Path: c:\Users\panch\VSCode\Assignment
Created Date: Wednesday, October 12th 2022, 1:27:51 pm
Author: Ravipanchal22
Question: apply given logic to string 
        1. find occurance
        2. find lenth
        3.concate two string
        4. reverse string

        Vyom Labs
*/
let String1 = "Hello World"
let String2 = "Good Morning"

function concate() {
    let concateString = `${String1}  ${String2}`
    let concateStr = document.getElementById("stringconcate")
    concateStr.textContent = concateString
}
concate()


function stringreverse() {
    let concateString = `${String1}  ${String2}`
    const newString = concateString.split('').reverse().join('')
    let concateStr = document.getElementById("stringreverse")
    concateStr.textContent = newString
}
stringreverse()

function stringlength() {
    let concateString = `${String1}  ${String2}`
    let lengthStr = concateString.length
    let concateStr = document.getElementById("stringlength")
    concateStr.textContent = lengthStr
}
stringlength()

function stringOccur() {
    let concateString = `${String1}  ${String2}`
    let occurance = concateString.split("Good").length - 1
    let occuranceStr = document.getElementById("stringOccur")
    occuranceStr.textContent = "Good" + " " + occurance
}
stringOccur()