const button = document.querySelector("#button");
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
function addName(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(addName(+num1.value, +num2.value));
});
const num100 = 100;
