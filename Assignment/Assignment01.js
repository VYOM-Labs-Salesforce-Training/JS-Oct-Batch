/*
 * Filename: c:\Users\panch\VSCode\Assignment\Assignment1.js
 * Path: c:\Users\panch\VSCode\Assignment
 * Created Date: Tuesday, October 11th 2022, 6:07:34 pm
 * Author: Ravipanchal22
 * whenever this function is called, it will give grade according to the marks.
 * 
 * Copyright (c) 2022 Your Company
 */

function grade() {
    let maths = 75;
    let science = 75;
    let socialScience = 74;
    let english = 75;

    // this will get the percentage value of marks
    grades = ((maths + science + socialScience + english) / 400) * 100
    console.log(grades);
    // here we are checking percentage and setting their grades according
    if (grades <= 85 && grades >= 75) {
        console.log('Distiction');
        alert('Distiction');
    } else if (grades < 75 && grades >= 65) {
        console.log('First Class');
        alert('First Class');
    } else if (grades < 60 && grades >= 55) {
        alert('Second Class');
        console.log('Second Class');
    } else if (grades < 55 && grades >= 45) {
        alert('Third Class');
        console.log('Tnird Class');
    } else {
        alert('Fail');
        console.log('Fail');
    }
}

grade();
