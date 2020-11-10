/**
 * You will follow the instructions in the exercises/17-transforming-dom/transforming-dom.html
 * to transform various elements on the page in different ways.
 * You may modify the HTML to add ids, classes, data attributes, etc.
 *
 */
// document.getAttribute('.alert').role = "alert";
// console.log (document.querySelector('div'));
// 

const red = document.querySelector(".alert-danger");
console.log(red);
red.role = "alert";
console.log(red);
console.log(red.role);

const link = document.querySelector("a");
link.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript";
console.log(link.href);

const text = document.querySelector(".alert-success");
text.textContent = "I am victorious!";

const color = document.querySelector(".alert-info");
color.style.backgroundColor = "purple";

const textColor = document.querySelector("[data-mine]");
textColor.classList.remove("alert-danger");
textColor.classList.add("text-warning");

const go = document.querySelector("[data-go]");
go.style.display ="none";

const show = document.querySelector(".hidden");
show.classList.remove("hidden");

const button = document.querySelector(".btn");
const buttonText = document.querySelector("#buttonText");
if (button.classList.contains("btn-primary")) {
    buttonText.textContent = "✔ blue";
}
