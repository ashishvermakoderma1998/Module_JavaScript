
import message from "./message.js";
import {name, age, car,model } from "./name_direct.js";



document.getElementById("demo").innerHTML = message();


let user = name + age;
document.getElementById("demo2").innerHTML = user;


// ---------car--------
let vechile = car + model;
document.getElementById("demo3").innerHTML = vechile;