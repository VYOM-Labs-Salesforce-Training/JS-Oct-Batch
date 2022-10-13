/*
 * Filename: c:\Users\panch\VSCode\Assignment\JS-Oct-Batch\Assignment\Assignment15.js
 * Path: c:\Users\panch\VSCode\Assignment\JS-Oct-Batch\Assignment
 * Created Date: Thursday, October 13th 2022, 12:18:27 pm
 * Author: Ravipanchal22
 * Question: Accept the information of registration
 * 
 * Copyright (c) 2022 Vyom Labs
 */
function validate() {
    if (document.PersonalInformation.firstname.value == "") {
        alert("Please Enter Your FirstName!");
        document.PersonalInformation.firstname.focus(); // foucs():-set the element as active elelment in current document
        return false;
    }
    if (document.PersonalInformation.lastname.value == "") {
        alert("Please Enter Your LastName!");
        document.PersonalInformation.lastname.focus();
        return false;
    }

    if (document.PersonalInformation.paddress.value == "") {
        alert("Please Enter Your Address!");
        document.PersonalInformation.paddress.focus();
        return false;
    }

    if (document.PersonalInformation.mobilenumber.value == "" ||
        isNaN(document.PersonalInformation.mobilenumber.value) ||
        document.PersonalInformation.mobilenumber.value.length != 10) {
        alert("Please Enter a Mobile Number");
        document.PersonalInformation.mobilenumber.focus();
        return false;
    }
    if ((PersonalInformation.sex[0].checked == false) && (PersonalInformation.sex[1].checked == false)) {
        alert("Please choose your Gender");
        return false;
    }
    return (true);
}