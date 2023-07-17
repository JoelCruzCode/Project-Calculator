// To do List:

// 3.) add exponent and modulo/squareroot functionality/

let firstNum = ``;
let secondNum = ``;
let operation = ``;
let sum;

// Nodes
const numbers = document.querySelectorAll(".number");
const subBtn = document.querySelector(".subtract");
const addBtn = document.querySelector(".add");
const multBtn = document.querySelector(".multiply");
const divBtn = document.querySelector(".divide");
const expBtn = document.querySelector(".exponent");
const arithmetics = [subBtn, addBtn, multBtn, divBtn, expBtn];
const equalBtn = document.querySelector(".equal");
const clearBtn = document.querySelector(".clear");
const display = document.querySelector(".display");

// Math Operations
const add = (a, b) => Number(a) + Number(b);

const subtract = (a, b) => Number(a) - Number(b);

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const exponent = (a, b) => {
  sum = 1;
  for (i = 1; i <= b; i++) {
    sum *= a;
  }
  return sum;
};

const operate = function (
  operator = operation,
  num1 = firstNum,
  num2 = secondNum
) {
  if (operator === "-") {
    sum = subtract(num1, num2);
  } else if (operator === "+") {
    sum = add(num1, num2);
  } else if (operator === "*") {
    sum = multiply(num1, num2);
  } else if (operator === "/") {
    sum = divide(num1, num2);
  } else if (operator === "^") {
    sum = exponent(num1, num2);
  }
  return sum;
};

// Helper Functions
const displayContent = function (content) {
  display.textContent = content;
};

const clear = function () {
  display.textContent = ``;
  firstNum = "";
  secondNum = "";
  operation = "";
  sum = "";
};

// Event Listeners
arithmetics.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    // preps sum to be used for next calculation
    if (!operation && sum) {
      firstNum = sum;
      // chaining operations here
    } else if (!sum && operation) {
      firstNum = operate(operation, firstNum, secondNum);
      sum = firstNum;
      sum = "";
      secondNum = "";
    }
    operation = e.target.textContent;
    displayContent(`${firstNum} ${operation} `);
  })
);

numbers.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    // creates first number to be used in calculator
    if (!operation && !sum) {
      firstNum += e.target.textContent;
      displayContent(firstNum);
      // stops user from entering numbers after a calculation, requires operator to proceed
    } else if (!operation && sum) {
      return;
      // creates second number to be used in calculator
    } else {
      sum = "";
      secondNum += e.target.textContent;
      displayContent(`${firstNum} ${operation} ${secondNum}`);
    }
  })
);

clearBtn.addEventListener("click", clear);

// Calculates operation
equalBtn.addEventListener("click", function (e) {
  operate(operation, firstNum, secondNum);
  displayContent(`${firstNum} ${operation} ${secondNum} = ${sum}`);
  secondNum = "";
  firstNum = sum;
  operation = "";
});
