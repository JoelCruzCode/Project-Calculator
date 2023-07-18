// To do List:
// 1.) add delete function(backspace)
// 2.) improve CSS: add hover & onclick styles
// 3.) Improve flexbox properties for shrinking and growing
// 4.) round numbers after a certain decimal point
// 5.) Add Keyboard support
let firstNum = ``;
let secondNum = ``;
let operation = ``;
let sum;

// selectors
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
const resultDisplay = document.querySelector(".result");
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
const displayContent = function (content, result = false) {
  display.textContent = content;
  if (result) {
    resultDisplay.textContent = result;
  }
};

const checkLength = function (content) {
  if (content.length <= 9) return true;
  else return false;
};

const clear = function () {
  display.textContent = ``;
  firstNum = "";
  secondNum = "";
  operation = "";
  sum = "";
  resultDisplay.textContent = "";
};

const includesDecimal = function (event, entry1, entry2) {
  if (!entry2) {
    if (event.target.textContent === "." && entry1.includes(".")) return true;
  }
  if (event.target.textContent === "." && entry2.includes(".")) return true;
};

// Event Listeners
arithmetics.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    // preps sum to be used for next calculation
    if (!operation && sum) {
      firstNum = sum;
      operation = e.target.textContent;
      displayContent(`${firstNum} ${operation}`);
      // chaining operations here
    } else if (!sum && operation) {
      // firstNum = operate(operation, firstNum, secondNum);
      sum = operate(operation, firstNum, secondNum);
      displayContent(`${firstNum} ${operation} ${secondNum} =`, sum);
      firstNum = sum;
      sum = "";
      secondNum = "";
      operation = e.currentTarget.textContent;
    } else if (!sum && !operation) {
      operation = e.target.textContent;
      displayContent(`${firstNum} ${operation}`);
    }
  })
);

numbers.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    // stops user from inputting mutliple decimals in an entry
    if (includesDecimal(e, firstNum, secondNum)) return;

    // creates first number to be used in calculator
    if (!operation && !sum) {
      checkLength(firstNum) ? (firstNum += e.target.textContent) : firstNum;
      displayContent(firstNum);
      // stops user from entering numbers after a calculation, requires operator to proceed
    } else if (!operation && sum) {
      return;
      // creates second number to be used in calculator
    } else {
      sum = "";
      checkLength(secondNum) ? (secondNum += e.target.textContent) : secondNum;
      displayContent(`${firstNum} ${operation} ${secondNum}`);
    }
  })
);

// Calculates operation
equalBtn.addEventListener("click", function (e) {
  operate(operation, firstNum, secondNum);
  displayContent(`${firstNum} ${operation} ${secondNum} = `, sum);
  secondNum = "";
  firstNum = sum;
  operation = "";
});
// Clears display and resets variables to undefined
clearBtn.addEventListener("click", clear);
