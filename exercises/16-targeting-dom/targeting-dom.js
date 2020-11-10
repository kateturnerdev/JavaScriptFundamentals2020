/**
 * You will be targeting DOM elements (the HTML) on the page using
 * "document.querySelector" or "document.querySelectorAll"
 * You will then use "console.log" to print the results.
 * 
 * @example console.log( document.querySelector("#myTarget") );
 * 
 * When you use "document.querySelectorAll", you must loop through each
 * element in the collection and console.log each element. (See the slides)
 * 
 * Do not change the HTML unless you are instructed to do so.
**/



const exerciseOne = document.querySelector("li");
console.log (exerciseOne);

const exerciseTwo = document.querySelector("#myId");
console.log(exerciseTwo);

const exerciseThree = document.querySelectorAll("li");
console.log(Object.values(exerciseThree));

const exerciseFour = document.querySelectorAll(".bg-warning");
console.log(Object.values(exerciseFour));

const exerciseFive = document.querySelectorAll(".bg-success .col");
console.log(Object.values(exerciseFive));

const exerciseSix = document.querySelector("[data-targets]");
console.log (exerciseSix);

