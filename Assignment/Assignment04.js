/*
Filename: c:\Users\panch\VSCode\Assignment\Assignment04.html
Path: c:\Users\panch\VSCode\Assignment
Created Date: Wednesday, October 12th 2022, 2:26:42 pm
Author: Ravipanchal22
Question: this file will take input and convert each first word of the string to upper case

Vyom Labs
 */
var inputStr = document.getElementById("inputString")
var newString = document.getElementById("newString")

function convert() {
    const words = inputStr.value.split(" ")
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1)
    }
    words.join(" ")

    newString.innerText = words
}
convert()