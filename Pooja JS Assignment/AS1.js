var s1,s2,s3,s4;
var total;
s1=70;
s2=80;
s3=80;
s4=50;
total=(s1+s2)+(s3+s4);
var per = (total / 400)*100;
console.log('Your Percentage is '+per);
if(per>=70){
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
