
/*
 * Filename: c:\Users\karan\Documents\JavaScript assignment\Javascript Assignment\Programno1.js
 * Path: c:\Users\karan\Documents\JavaScript assignment\Javascript Assignment
 * Created Date: Wednesday, October 12th 2022, 2:05:16 pm
 * Author: karan
 * Write a JavaScript program which compute, result of student and display grade (grades:
distinction,first class,second class, pass class fail).
 * Copyright (c) 2022 Your Company
 */


var students = [['Ram', 80], ['Vrushabh', 87], ['Puja', 98], ['Amit', 95], ['Omkar', 58]];

var Avgmarks = 0;

for (var i=0; i < students.length; i++) {
        Avgmarks += students[i][1];
        var avg = (Avgmarks/students.length);
}

console.log("Average grade: " + (Avgmarks)/students.length);

        if (avg < 60){
          console.log("Grade : F");      
          } 
        else if (avg < 70) {
                console.log("Grade : D"); 
                  } 
        else if (avg < 80) 
             {
                console.log("Grade : C"); 
        } else if (avg < 90) {
                console.log("Grade : B"); 
        } else if (avg < 100) {
                console.log("Grade : A"); 
}