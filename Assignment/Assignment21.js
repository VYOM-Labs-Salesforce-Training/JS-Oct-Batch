/*
 * Filename: c:\Users\panch\VSCode\Assignment\JS-Oct-Batch\Assignment\Assignment21.js
 * Path: c:\Users\panch\VSCode\Assignment\JS-Oct-Batch\Assignment
 * Created Date: Thursday, October 13th 2022, 3:16:23 pm
 * Author: Ravipanchal22
 * Question: Write a javascript program to compare the values of password and confirm password 
Fields and display message accordingly.Also perform the validation to check any of field 
should not be empty
 * 
 * Copyright (c) 2022 Your Company
 */


function verifyPassword() {
    var pw = document.getElementById("pswd").value;
    //check empty password field  
    if (pw == "") {
        document.getElementById("message").innerHTML = "Fill the password please!";
        return false;
    }

    //minimum password length validation  
    if (pw.length < 8) {
        document.getElementById("message").innerHTML = "Password length must be atleast 8 characters";
        return false;
    }

    //maximum length of password validation  
    if (pw.length > 15) {
        document.getElementById("message").innerHTML = "Password length must not exceed 15 characters";
        return false;
    } else {
        alert("Password is correct");
    }
} 