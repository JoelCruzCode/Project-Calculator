// To do List:
// 1.) seperate equal button from event listener

let firstNum;
let secondNum;
let operation;

const buttons = document.querySelectorAll("button");
const subBtn = document.querySelector(".substract");
const addBtn = document.querySelector(".add");
const multBtn = document.querySelector(".multiply");
const divBtn = document.querySelector(".divide");
const equalBtn = document.querySelector(".equal");
const clearBtn = document.querySelector(".clear");
const squareBtn = document.querySelector(".square-root");
const expBtn = document.querySelector(".exponent");
const caclculator = document.querySelector(".calculator");
const display = document.querySelector(".display");
const Arithmetics = [subBtn, addBtn, multBtn, divBtn];

// Math Operations
const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const operate = function (operator, num1, num2) {
  if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "*") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  }
};

const displayContent = function (content) {
  display.textContent += ` ${content}`;
};
// Event Listeners
buttons.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    if (e.target.className != "number") {
      operation = e.target.textContent;
      displayContent(operation);
    } else if ((e.target.className = "number")) {
      if (!firstNum) {
        firstNum = e.target.textContent;
        displayContent(firstNum);
      } else {
        secondNum = e.target.textContent;
        displayContent(secondNum);
      }
    }
  })
);

//////////////////////////////////////////////////////////

// const createNumbers = function () {
//   for (i = 0; i < 10; i++) {
//     let num = document.createElement("button");
//     num.textContent = i;
//     caclculator.append(num);
//   }
// };

// const exponent = (a, b) => {
//     let sum = 1;
//     for (i = 1; i <= b; i++) sum *= a;
//     return sum;
//   };

//   const root = (a, b) => {};

// createNumbers();
