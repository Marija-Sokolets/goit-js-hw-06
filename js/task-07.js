const textSize = document.getElementById(`font-size-control`);
const text = document.getElementById(`text`);

function inputSize() {
    text.style.fontSize = `${textSize.value}px`;
}
textSize.addEventListener("input", inputSize);
