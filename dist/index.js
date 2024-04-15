"use strict";
// type Obj = {
//   height: number;
//   weight: number;
//   gender: boolean;
// };
// const obj: Obj = {
//   height: 340,
//   weight: 60,
//   gender: true,
// };
// console.log(obj);
// Type assertion
const form = document.getElementById("myForm");
const myinput1 = document.getElementById("myInput1");
const myinput2 = document.getElementById("myInput2");
const body = document.querySelector("body");
form.onsubmit = (e) => {
    e.preventDefault();
    const value1 = Number(myinput1.value);
    const value2 = Number(myinput2.value);
    const h2 = document.createElement("h2");
    h2.textContent = String(value1 + value2);
    body.append(h2);
};
