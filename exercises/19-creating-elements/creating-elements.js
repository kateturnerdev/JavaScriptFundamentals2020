const btn = document.querySelector("#btn");
const continueDiv = document.querySelector("#continuing");


const handleBtnClick = () => {

    continueDiv.insertAdjacentHTML("beforeend", "<span>Data theft in progress...</span>");
    window.DOMPurify.sanitize(continueDiv);
};

btn.addEventListener("click", handleBtnClick);