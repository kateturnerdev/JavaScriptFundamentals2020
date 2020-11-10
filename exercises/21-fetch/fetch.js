// const dogImage = "https://dog.ceo/api/breeds/image/random"; 
const button = document.querySelector("#button");
const image = document.querySelector("#image");

const handleClick = () => {fetch ("https://dog.ceo/api/breeds/image/random", {method: 'GET'}) 
.then(response => response.json())
.then(response => image.src= response.message)  
.catch(err => console.log(err));};

button.addEventListener("click", handleClick);




// {

//   /**
//    * As a user, I should be able to click on the a button to see random dog images.
//    * Please use fetch in this example.
//    *
//    * You will be making an HTTP request to this API:
//    * https://dog.ceo/api/breeds/image/random
//    *
//    * You should expect this as a response:
//    * {
//    *    "status": "success",
//    *    "message": "https://images.dog.ceo/breeds/poodle-toy/n02113624_9550.jpg"
//    * }
//    */
// })();

