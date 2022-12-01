/*
 * Filename: c:\Users\DELL\Downloads\js ass\prime.js
 * Path: c:\Users\DELL\Downloads\js ass
 * Created Date: Thursday, December 1st 2022, 2:32:54 pm
 * Author: gayatrik29
 * 2. JavaScript Program to Check Prime Number
 * Copyright (c) 2022 Your Company
 */
//Initializing Variable
let givenNumber=11;
let count=0;
//Using if-else ladder
if(givenNumber==0 || givenNumber==1){
   console.log("Not prime");
}
else if(givenNumber>1){
    for(let i=2;i<givenNumber;i++){
        if(givenNumber%i==0){
            count++;
            break;
        }
    }
    if(count==1){
        console.log("Not Prime");
    }
    else{
        console.log(" Prime");
    }
}

