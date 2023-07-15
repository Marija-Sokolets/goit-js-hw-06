const inputName = document.getElementById("name-input");
const outName = document.getElementById("name-output");
let anonym = "Anonymous";

outName.textContent = anonym;

inputName.addEventListener("input", textName);

function textName(event) {
    outName.textContent = event.target.value || anonym;
};
console.log(inputName);
console.log(outName);