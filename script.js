// To do List:
// 1.) make sure numbers stay within display // finished
// 2.) create second div in display to seperate entries from results
// 3.) add delete function
// 4.) stop decimals from trailing past a certain limit // finished
// 5.) improve CSS + add flex sizing

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
};

// const checkForDecimal = function (entry, event) {
//   if (event.target.textContent === "." && entry.includes(".")) return true;
// };

// Event Listeners
arithmetics.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    console.log(display.textContent.length);
    // preps sum to be used for next calculation
    if (!operation && sum) {
      firstNum = sum;
      // chaining operations here
    } else if (!sum && operation) {
      firstNum = operate(operation, firstNum, secondNum);
      // sum = firstNum;
      sum = "";
      secondNum = "";
    }
    operation = e.target.textContent;
    displayContent(`${firstNum} ${operation} `);
  })
);

numbers.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    console.log(this);
    console.log(e);
    console.log(e.target);
    // stops user from inputting mutliple decimals in an entry
    if (!secondNum) {
      if (e.target.textContent === "." && firstNum.includes(".")) return;
      // if (checkForDecimal(firstNum, e)) return;
    }
    if (secondNum.includes(".") && e.target.textContent === ".") return;

    // creates first number to be used in calculator
    if (!operation && !sum) {
      checkLength(firstNum) ? (firstNum += e.target.textContent) : firstNum;
      displayContent(firstNum);
      // stops user from entering numbers after a calculation, requires operator to proceed
    } else if (!operation && sum) {
      return;
      // creates second number to be used in calculator
    } else {
      checkLength(secondNum) ? (secondNum += e.target.textContent) : secondNum;
      displayContent(`${firstNum} ${operation} ${secondNum}`);
    }
  })
);

// Calculates operation
equalBtn.addEventListener("click", function (e) {
  operate(operation, firstNum, secondNum);
  displayContent(`${firstNum} ${operation} ${secondNum} = ${sum}`);
  secondNum = "";
  firstNum = sum;
  operation = "";
});
// Clears display and resets variables to undefined
clearBtn.addEventListener("click", clear);

// sum = ""; might remove ? this might need it was previously on line 116 under else condition for numbers
