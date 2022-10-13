/*
 * Filename: c:\Users\DELL\Downloads\Javascript Assignment (1)\Javascript Assignment\Programno11.js
 * Path: c:\Users\DELL\Downloads\Javascript Assignment (1)\Javascript Assignment
 * Created Date: Wednesday, October 12th 2022, 2:00:41 pm
 * Author: gayatrik29
 * 
 * Copyright (c) 2022 Your Company
 * 
 * 11) Write a JavaScript code for calculating bills. If quantity is less than 5 then there is any discount,
 *  If quantity is greater than 5 and less than 25 then discount is 5%,
 *  If quantity is greater than 25 and less than 50 then discount is 15%, 
 * If quantity is greater than 50 discount is 20%.
 */

//Declaring function
function billCal(bill) {
	if (bill < 5)
		return "Sorry! No Discount";
	else if (5 < bill && bill < 25)
		return "Discount : " + ((bill / 100) * 5) + " Rs";
	else if (25 < bill && bill < 50)
		return "Discount : " + ((bill / 100) * 15) + " Rs";
	else if (50 < bill)
		return "Discount : " + ((bill / 100) * 20) + " Rs";
}
bill = 100;
console.log(billCal(bill));