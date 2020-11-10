/**
 * You have three challenges to solve below with Vanilla JavaScript.
 * You are allowed to make changes to the HTML and CSS.
 */

/**
 * Challenge 1: Alert Me
 * When the clicks on the button that says "Alert Me!", it should display an alert.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
 */
const handleAlertClick = () => {
    window.alert ("Alert me!");

};

const alertButton = document.querySelector("#alert");

alertButton.addEventListener('click', handleAlertClick);
/**
 * Challenge 2: Disable a button that will charge a credit card.
 *
 * To prevent users from charging the credit card more than once:
 * 1. Disable the button when it is clicked.
 * 2. Change the text to say e.g. "Loading ..." once it is clicked.
 */

const handleChargeClick = (event) => {
event.target.disabled = true;

};
const chargeButton = document.querySelector("#charge");

chargeButton.addEventListener('click', handleChargeClick);
/**
 * Challenge 3: Show comments for the news story.
 *
 * When the user clicks on the "View Comments" button, the comment section should appear.
 * Right now, the comments are hidden because they have the class ".hidden",
 * but you can switch up the HTML so that it uses inline styles if you like.
 *
 * BONUS: Clicking on the button should toggle instead of just show the comments.
 * If the comments are open, change the button text from "View Comments" to "Hide Comments".
 */

    
const commentButton = document.querySelector("#commentBtn");
const comment = document.querySelector ("#comment");
    
const handleCommentClick = (event) => {
if (comment.classList.contains("hidden")) {
        event.target.textContent = "Hide Comments";
        comment.classList.remove("hidden");  
}
else {
    event.target.textContent = "View Comments";
    comment.classList.add("hidden");  

}
};


    commentButton.addEventListener('click', handleCommentClick);
    console.log(comment);
/**
 * Challenge 4: Rendering what a user is typing on the page.
 *
 * When the user types inside the textbook labeled "Enter mystery text here",
 * it should display what the user is typing in the <div></div> tags below.
 */
const inBox = document.querySelector("#inBox");
const outBox = document.querySelector("#outBox");
const handleInput = () =>{
outBox.textContent = inBox.value;
};

inBox.addEventListener ('input', handleInput);

/**
 * Challenge 5: Display the results of the world's most pointless search engine.
 *
 * When the user types in the textbook and either clicks "Search" button or hits the enter key,
 * display the message "No results for ___ found" inside of this <p></p> below.
 * For example, if the user searches for "Indian Ocean", display "No results for Indian Ocean found".
 * (Since there are no oceans near Albany, NY, the search engine should
 * display the "No results for ___ found" message every time.)
 *
 * The exercise must be completed with a form handler
 * and you must prevent the page from refreshing when the form is submitted.
 */
const oceanInput = document.querySelector("#oceanInput");
const oceanForm = document.querySelector("#oceanForm");
const oceanOutput = document.querySelector("#oceanOutput");

const handleSearch = (event) => {
    event.preventDefault();
    oceanOutput.textContent = `No results for ${oceanInput.value} found`;

};

oceanForm.addEventListener('submit', handleSearch);


/**
 * Challenge 6: Agree to the terms and conditions
 *
 * Whenever the user clicks the "Continue" button, if she has not agreed to the terms,
 * the error "You must agree to the terms and conditions" should appear
 * and the label "I Agree to the Terms and Conditions" should turn red.
 * If she has, then display "Thank you for signing up".
 *
 * To start, you will need to hide some element on the page and change the input's classes.
 */
// const agree = document.querySelector("#agree");
const terms = document.querySelector("#terms");
const agreeBtn = document.querySelector('#agreeBtn');
const disagreeText = document.querySelector('#disagreeText');
const agreeText = document.querySelector('#agreeText');
const consentText = document.querySelector("#consentText");
disagreeText.classList.add("hidden");
agreeText.classList.add("hidden");
consentText.classList.remove("form-check-label");

const handleAgreeClick = (event) => {
    event.preventDefault();
    if (terms.checked) {
        agreeText.classList.remove("hidden");
    }
    else {
    disagreeText.classList.remove("hidden");
    consentText.classList.add("form-check-label");
    }
};
agreeBtn.addEventListener("click", handleAgreeClick);

/**
 * Challenge 7: Add pagination to the student table.
 *
 * First, when the page initially loads, only the first 10 students should be visible.
 * (That is, every student row that has data-group="1"). You can just use CSS / HTML to do this.
 *
 * Second, clicking on the pagination below should show and hide different students in the table:
 * - Clicking on the "«" and "1" buttons should show everything in data-group="1" and hide everything in data-group="2".
 * - Clicking on the "2" and "»" buttons should show everything in data-group="2" and hide everything in data-group="1".
 */
const groupOne = document.querySelector("#groupOne");
const groupTwo = document.querySelector("#groupTwo");
const previousPageBtn = document.querySelector("#previousPageBtn");
const nextPageBtn = document.querySelector("#nextPageBtn");
const pageOneBtn = document.querySelector("#pageOneBtn");
const pageTwoBtn = document.querySelector("#pageTwoBtn");



const handlePreviousPageClick = (event) => {
    event.preventDefault();
    console.log("handlePreviousPageClick");
if (!groupTwo.classList.contains("hidden")){
    groupTwo.classList.add("hidden");
}
if (groupOne.classList.contains("hidden")){
    groupOne.classList.remove("hidden");
}
};


const handleNextPageClick = (event) => {
    event.preventDefault();
    console.log ("handleNextPageClick");
    console.log(groupTwo);
    groupTwo.classList.remove("hidden");
if (groupTwo.classList.contains("hidden")){
   
}
if (!groupOne.classList.contains("hidden")){
    groupOne.classList.add("hidden");
}
};

groupTwo.classList.add("hidden");
previousPageBtn.addEventListener("click", handlePreviousPageClick);

pageOneBtn.addEventListener("click", handlePreviousPageClick);

pageTwoBtn.addEventListener("click", handleNextPageClick);

nextPageBtn.addEventListener("click", handleNextPageClick);






