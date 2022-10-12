/*
 * Filename: c:\Users\karan\Documents\JavaScript assignment\Javascript Assignment\Programno5.js
 * Path: c:\Users\karan\Documents\JavaScript assignment\Javascript Assignment
 * Created Date: Wednesday, October 12th 2022, 2:05:16 pm
 * Author: karan
 * 
 * Copyright (c) 2022 Your Company
 */

function findStringIsPresentOrNot(searchStr) {
      str = "I am a Salesforce developer and i like coding";
      if (str.includes(searchStr))
          console.log("String contains '" + searchStr + "'.");
      else
          console.log("String does not contains : '" + searchStr + "'.");
  }
  findStringIsPresentOrNot("developer");