/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

let firstNumber = undefined
let secondNumber = undefined
let operand
let result

/*------------------------ Cached Element References ------------------------*/

const displayElement = document.querySelector(".display")
displayElement.textContent = 0

const numbersElements = document.querySelectorAll('.number');

const clearElement = document.querySelector("#C")

const operatorsElements = document.querySelectorAll(".operator");

const equalsElement = document.querySelector(".equals")

/*----------------------------- Event Listeners -----------------------------*/

numbersElements.forEach(numberElement => {
  numberElement.addEventListener('click', event => displayNumber(event));
});

operatorsElements.forEach(operator => {
  operator.addEventListener('click', event => operatorPress(event))
});

clearElement.addEventListener('click', () => {
  displayElement.textContent = 0
  firstNumber = undefined
  secondNumber = undefined
})

equalsElement.addEventListener('click', () => equalsPress())


/*-------------------------------- Functions --------------------------------*/

function displayNumber(event) {
  if (displayElement.textContent == 0 || displayElement.textContent == "undefined") {
    displayElement.textContent = event.target.innerText
  } else {
    displayElement.textContent += event.target.innerText
  }
}

function operatorPress(event) {
  firstNumber = Number(displayElement.textContent)
  operand = event.target.innerText
  displayElement.textContent = 0
}

function equalsPress() {
  secondNumber = Number(displayElement.textContent)
  result = computeResult()
  displayElement.textContent = result

}

const computeResult = () => {
  switch (operand) {
    case "+":
      return firstNumber + secondNumber
    case "-":
      return firstNumber - secondNumber
    case "*":
      return firstNumber * secondNumber
    case "/":
      return firstNumber / secondNumber

    default:
      return 0
  }
}















// const buttons = document.querySelectorAll('.button');


// buttons.forEach((button) => {
//     button.addEventListener('click', (event) => {
//       // This log is for testing purposes to verify we're getting the correct value
//       console.log(event.target.innerText);
//       // Future logic to capture the button's value would go here...
//     });
//   });
