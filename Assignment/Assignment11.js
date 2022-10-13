/*
 * Filename: c:\Users\panch\Downloads\Programno11.js
 * Path: c:\Users\panch\Downloads
 * Created Date: Wednesday, October 12th 2022, 10:43:48 pm
 * Author: Ravipanchal22
 * Question: Write a program to calculate dicount with considering the item count 
 * 
 * Copyright (c) 2022 Vyom Labs
 */

let discount
let price = 1500
let item = 5

function calculateDiscount() {
    // if item is less than 5 then there is no discount
    if (item <= 5) {
        console.log("Sorry there is no discount")
    }
    // if item count is between 5 to 25 then 5% dicount
    else if (item > 5 && item <= 25) {
        discount = 5
        let discountAmount = price - (price * discount / 100)
        console.log(discountAmount)
        console.log("calculate Discount of 5%")
    }
    // if item count is between 25 to 50 then 15% dicount
    else if (item > 25 && item <= 50) {
        discount = 15
        let discountAmount = price - (price * discount / 100)
        console.log(discountAmount)
        console.log("calculate Discount of 15%")
    }
    // if item count is more than 50 then 20% dicount
    else if (item > 50) {
        discount = 20
        let discountAmount = price - (price * discount / 100)
        console.log(discountAmount)
        console.log("calculate Discount of 20%")
    }
}
calculateDiscount()