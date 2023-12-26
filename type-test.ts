const button: HTMLElement = document.querySelector("#button")!;
const num1 = document.querySelector("#num1")! as HTMLInputElement;
const num2 = document.querySelector("#num2")! as HTMLInputElement;

function addName(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function () {
  console.log(addName(+num1.value, +num2.value));
});

const num100 = 100;
