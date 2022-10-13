/*
 * Filename: c:\Users\Vrushabh Mohatkar\OneDrive\Desktop\JS-VM\Assignment 2\stringpresent.js
 * Path: c:\Users\Vrushabh Mohatkar\OneDrive\Desktop\JS-VM\Assignment 2
 * Created Date: Thursday, October 13th 2022, 2:16:26 pm
 * Author: vrushabhmohatkar123
 * Write a Java Script to pass string as parameter to function and search a string whether it is present or not.
 * Copyright (c) 2022 Vyom Labs Pvt. Ltd.
 */
function findStringIsPresentOrNot(searchStr) {
    str = "Ajay joined Vyom Labs";
    if (str.includes(searchStr))
        console.log("String contains '" + searchStr + "'.");
    else
        console.log("String does not contains : '" + searchStr + "'.");
}
findStringIsPresentOrNot("Vyom");