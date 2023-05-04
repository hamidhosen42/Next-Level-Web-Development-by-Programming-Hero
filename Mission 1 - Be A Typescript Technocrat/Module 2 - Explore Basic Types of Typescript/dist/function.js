"use strict";
//normal function
function add(num1, num2) {
    return num1 + num2;
}
//arrow function
const addArrow = (num1, num2) => num1 + num2;
//call back function
const arr = [2, 3, 4];
const newArray = arr.map((element) => element * element);
console.log(newArray);
//Object function
const person = {
    name: "Hamid",
    balance: 5,
    addBalance(money) {
        return `My New Balance is ${this.balance + money}`;
    }
};
console.log(person);
