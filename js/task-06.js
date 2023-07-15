const inputText = document.getElementById('validation-input');


function checkText(event) {
    if (inputText.value.length < inputText.dataset.length) {
        inputText.classList.add("invalid");
    } else {
        inputText.classList.remove("invalid");
        inputText.classList.add("valid");
    }
}
inputText.addEventListener("blur", checkText);
