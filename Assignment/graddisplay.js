/*
 * Filename: c:\Users\Vrushabh Mohatkar\OneDrive\Desktop\JS-VM\Assignment 2\graddisplay.js.js
 * Path: c:\Users\Vrushabh Mohatkar\OneDrive\Desktop\JS-VM\Assignment 2
 * Created Date: Wednesday, October 12th 2022, 11:29:58 pm
 * Author: vrushabhmohatkar123
 * Write a JavaScript program which compute, result of student and display grade (grades: 
   distinction,first class,second class, pass class fail).
 * Copyright (c) 2022 Vyom Labs Pvt. Ltd.
 */

var students = [['Ajay', 70], ['Vijay', 65], ['Ganesh', 77], 
                    ['Rajesh', 80], ['Dinesh', 68]];

    var marks = 0;

    for (var integer1=0; integer1 < students.length; integer1++) {
        marks += students[integer1][1];
    }

    var average = (marks / students.length);

    console.log("Average grade: " + average);
   

    if (average < 60)
    {
        console.log("Fail");     
    } 
    else if (average < 70) 
    {
        console.log("Pass Class"); 
    } 
    else if (average < 80) 
    {
        console.log("Second Class"); 
    } 
    else if (average < 90) 
    {
        console.log("First Class"); 
    } 
    else if (average < 100) 
    {
        console.log("Distinction"); 
    }