/*
 * Filename: c:\Users\hp-pc\Desktop\New folder (4)\JS-Oct-Batch\Pooja JS Assignment\AS1.js
 * Path: c:\Users\hp-pc\Desktop\New folder (4)\JS-Oct-Batch\Pooja JS Assignment
 * Created Date: Wednesday, October 12th 2022, 9:47:35 pm
 * Author: Pooja Parab
 * 
 * Copyright (c) 2022 Vyom Labs
 * 
 *                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
 */    
var maths,science,arts,english;
var total;
maths=70;
science=80;
arts=80;
english=50;
total=(maths+science)+(arts+english);//total of subject
var per = (total / 400)*100;
console.log('Your Percentage is '+per);
if(per>=70)//checking percentage condition
{
    console.log('You have passed with first class distinction');
}
else if((per<=69) && (per>=60)){
    console.log('You have passed with first class');
}
else if((per<=59) && (per>=50)){
    console.log('You have passed with second class');
}
else{
    console.log('You are fail!!');
}
