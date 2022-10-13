/*
 * Filename: c:\Users\panch\VSCode\Assignment\JS-Oct-Batch\Assignment\Assignment18.js
 * Path: c:\Users\panch\VSCode\Assignment\JS-Oct-Batch\Assignment
 * Created Date: Thursday, October 13th 2022, 2:21:55 pm
 * Author: Ravipanchal22
 * 
 * Copyright (c) 2022 Your Company
 */

function clock() {
    this.currentTime = new Date();
    this.hours = this.currentTime.getHours();
    this.minutes = this.currentTime.getMinutes();
    this.seconds = this.currentTime.getSeconds();
}
clock.prototype.run = function () {
    setInterval(this.update.bind(this), 1000);
};

clock.prototype.update = function () {
    this.updateTime(1);
    let newdateTime = document.getElementById("datetime")
    //console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
    newdateTime.textContent = this.hours + ":" + this.minutes + ":" + this.seconds;
};

clock.prototype.updateTime = function (secs) {
    this.seconds += secs;
    if (this.seconds >= 60) {
        this.minutes++;
        this.seconds = 0;
    }
    if (this.minutes >= 60) {
        this.hours++;
        this.minutes = 0;
    }
    if (this.hours >= 24) {
        this.hours = 0;
    }
};

var dateTime = new clock();
dateTime.run();